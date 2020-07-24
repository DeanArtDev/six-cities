import Header from '@components/header/header-connect';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

const mockStore = configureStore([]);

describe(`<Header/>: `, () => {

  const store = mockStore({
    USER: {
      authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
      authInfo: TestMock.authInfo,
    }
  });

  it(`should render AUTH correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <Header
                authInfo={TestMock.authInfo}
                authStatus={TestMock.authorizationStatus.AUTH}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render NOT AUTH correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router
              history={history}
            >
              <Header
                authInfo={TestMock.authInfo}
                authStatus={TestMock.authorizationStatus.NOT_AUTH}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
