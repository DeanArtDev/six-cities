import * as React from 'react';
import {AppRoute} from '@root/consts/consts';
import {Authorization, Errors} from '@root/types';
import history from '@root/history';
import {Subtract} from "utility-types";
import { Redirect } from 'react-router-dom';

enum ErrorMessage {
  PASS = `Incorrect password`,
  EMAIL = `Incorrect email`,
  BOTH = `Incorrect email and password`,
}
const PASSWORD_LIMIT_SYMBOLS = 6;
const regEmail = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i;

type AuthInfo = {
  email: string;
  password: string;
}

interface State {
  email: string;
  password: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  errorMessage: Errors | string | null;
}
interface InjectingProps {
  onSubmit: (authInfo: AuthInfo) => void;
  authStatus: string;
  errors: string;
  checkAuth: () => void;
  emailValue: string;
  passwordValue: string;
  onEmailChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: () => void;
}

const withValidSingIn = (Component) => {
  type T = React.ComponentProps<typeof Component>;
  type P = Subtract<T, InjectingProps>;

  return class WithValidEmail extends React.PureComponent<P, State> {
    props: P;
    state: State;

    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        isEmailValid: false,
        isPasswordValid: false,
        errorMessage: null,
      };

      this._handleEmailChange = this._handleEmailChange.bind(this);
      this._handlePasswordChange = this._handlePasswordChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);

      this._checkAuthorization();
    }

    componentDidUpdate() {
      this._setErrorMessage();
    }
    _handleFormSubmit() {
      const {onSubmit, authStatus} = this.props;
      const isAuth = authStatus === Authorization.AUTH;

      if (this.state.isEmailValid && this.state.isPasswordValid && !isAuth) {
        onSubmit({
          email: this.state.email,
          password: this.state.password,
        });
      }
      this._setValidMessage();
    }
    _checkAuthorization() {

      const {checkAuth, authStatus} = this.props;
      checkAuth();

      if (authStatus === Authorization.AUTH) {
        history.push(AppRoute.ROOT);
      }
    }
    _setErrorMessage() {
      const {errors} = this.props;
      if (!errors) {
        return;
      }
      this.setState({errorMessage: errors});
    }
    _setValidMessage() {
      const isPass = this.state.isPasswordValid;
      const isEmail = this.state.isEmailValid;

      switch (true) {
        case !isPass && !isEmail:
          this.setState({errorMessage: ErrorMessage.BOTH});
          break;

        case !isEmail:
          this.setState({errorMessage: ErrorMessage.EMAIL});
          break;

        case !isPass:
          this.setState({errorMessage: ErrorMessage.PASS});
          break;

        default:
          this.setState({errorMessage: null});
      }
    }
    _handleEmailChange(evt) {
      this._validationEmail(evt);
    }
    _handlePasswordChange(evt) {
      this._validationPassword(evt);
    }
    _validationEmail(evt: React.ChangeEvent<HTMLInputElement>) {
      const value = evt.target.value;
      const isEmail = regEmail.test(value);

      this.setState({
        email: value,
        isEmailValid: isEmail
      });
    }
    _validationPassword(evt: React.ChangeEvent<HTMLInputElement>) {
      const value = evt.target.value;
      const isPassword = value.length >= PASSWORD_LIMIT_SYMBOLS;

      this.setState({
        password: value,
        isPasswordValid: isPassword,
      });
    }

    render() {
      const {authStatus} = this.props;

      return (
        authStatus !== Authorization.AUTH ?
        <Component
          {...this.props}
          emailValue={this.state.email}
          passwordValue={this.state.password}
          onEmailChange={this._handleEmailChange}
          onPasswordChange={this._handlePasswordChange}
          errorMessage={this.state.errorMessage}
          onSubmitForm={this._handleFormSubmit}
        />
        : <Redirect to={AppRoute.ROOT}/>
      );
    }
  };
};

export default withValidSingIn;
