import * as React from 'react';
import {Provider} from 'react-redux';
import * as renderer from 'react-test-renderer';
import App from '@components/app/app.connect';
import {ErrorType} from '@root/types';
import {AppState} from '@root/types';
import configureStore from 'redux-mock-store';
import {TestMock} from '@root/test-mock/test-mock';
import {noop} from "@root/utils/utils";

const mockStore = configureStore([]);

describe(`<App/>: `, () => {

  const initialStore = {
    DATA: {
      offers: TestMock.offers,
      detailOfferId: TestMock.offers[0].id,
      detailOffer: TestMock.offers[0],
      currentCity: TestMock.cities[0],
      cities: TestMock.cities,
      commentsDetailOffer: TestMock.comments,
      neighbourOffers: TestMock.offers,
      onTitleClick: noop,
      onLocationClick: noop,
      initStore: noop,
      login: noop,
      checkAuth: noop,
      onChangeFavorite: noop,
    },
    MAIN: {
      appState: AppState.READY,
      errors: {
        [ErrorType.SING_IN]: null,
        [ErrorType.UPLOAD_COMMENT]: null,
        [ErrorType.FAVORITE]: null,
      }
      ,
    },
    USER: {
      authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
      authInfo: null,
    }
  };
  let store = mockStore(initialStore);

  it(`should render READY correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>,
          {createNodeMock: () => document.createElement(`section`)}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render LOADING correctly`, () => {

    store = mockStore(
        Object.assign(
            {},
            initialStore,
            {
              MAIN: {
                appState: AppState.LOADING,
                errors: {
                  [ErrorType.SING_IN]: null,
                  [ErrorType.UPLOAD_COMMENT]: null,
                  [ErrorType.FAVORITE]: null,
                },
              }
            }));

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>,
          {createNodeMock: () => document.createElement(`section`)}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
