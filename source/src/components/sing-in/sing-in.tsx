import Header from '@components/header/header-connect';
import {ErrorValidation} from '@components/error-validation/error-validation';
import {memo} from 'react';
import {AppState} from '@root/types';
import * as React from 'react';

type Props = {
  currentCity: string;
  emailValue: string;
  passwordValue: string;
  onEmailChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: () => void;
  errorMessage: string;
  appState: string;
}

export const WrapperComponent = memo<Props>(
    function SingIn(props: Props) {
      const {
        currentCity,
        emailValue,
        passwordValue,
        onEmailChange,
        onPasswordChange,
        onSubmitForm,
        errorMessage,
        appState,
      } = props;

      return (
        <div className="page page--gray page--login">

          <Header/>

          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form
                  className="login__form form"
                  action="#"
                  method="post"
                  onSubmit={(evt) => {
                    evt.preventDefault();
                    onSubmitForm();
                  }}
                >
                  {errorMessage &&
                <ErrorValidation
                  errorContent={errorMessage}
                />
                  }

                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      className="login__input form__input"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={onEmailChange}
                      value={emailValue}
                      required
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      className="login__input form__input"
                      type="password"
                      name="password"
                      autoComplete="section-blue shipping postal-code"
                      placeholder="Password"
                      onChange={onPasswordChange}
                      value={passwordValue}
                      required
                    />
                  </div>
                  <button
                    className="login__submit form__submit button"
                    type="submit"
                    disabled={appState === AppState.LOADING}
                  >
                    {appState === AppState.LOADING ? `Loading...` : `Sign in`}
                  </button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{currentCity}</span>
                  </a>
                </div>
              </section>
            </div>
          </main>
        </div>
      );
    }
);

