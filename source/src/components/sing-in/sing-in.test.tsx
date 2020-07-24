import {WrapperComponent as SingIn} from './sing-in';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {AppState} from '@root/types';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {noop} from "@root/utils/utils";

const mockStore = configureStore([]);

describe(`<SingIn/>: `, () => {

  const store = mockStore({
    USER: {
      authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
      authInfo: TestMock.authInfo,
    }
  });

  it(`should render READY state currently`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <SingIn
                currentCity={TestMock.cities[0]}
                appState={AppState.READY}
                errorMessage={`error`}
                emailValue={`email`}
                onEmailChange={noop}
                onPasswordChange={noop}
                onSubmitForm={noop}
                passwordValue={`password`}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render LOADING state correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <SingIn
                appState={AppState.LOADING}
                currentCity={TestMock.cities[0]}
                errorMessage={`error`}
                emailValue={`email`}
                onEmailChange={noop}
                onPasswordChange={noop}
                onSubmitForm={noop}
                passwordValue={`password`}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
