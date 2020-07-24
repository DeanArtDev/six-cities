import Main from './main';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';

const mockStore = configureStore([]);

describe(`<Main/>: `, () => {

  let store = mockStore({
    USER: {
      authorizationStatus: TestMock.authorizationStatus.AUTH,
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
            <Main
              offers={TestMock.adaptedOffers}
              currentCity={TestMock.cities[0]}
              cities={TestMock.cities}
              onTitleClick={noop}
              onLocationClick={noop}
            />
          </Router>
        </Provider>,
        {createNodeMock: () => document.createElement(`section`)}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render NOT AUTH correctly`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
        authInfo: TestMock.authInfo,
      }
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}
          >
            <Main
              offers={TestMock.adaptedOffers}
              currentCity={TestMock.cities[0]}
              cities={TestMock.cities}
              onTitleClick={noop}
              onLocationClick={noop}
            />
          </Router>
        </Provider>,
        {createNodeMock: () => document.createElement(`section`)}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render without offers (length === 0)`, () => {
    store = mockStore({
      USER: {
        authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
        authInfo: TestMock.authInfo,
      }
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <Router
            history={history}
          >
            <Main
              offers={[]}
              currentCity={TestMock.cities[0]}
              cities={TestMock.cities}
              onTitleClick={noop}
              onLocationClick={noop}
            />
          </Router>
        </Provider>,
        {createNodeMock: () => document.createElement(`section`)}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
