import Favorites from './favorites';
import {AppState} from '@root/types';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {TestMock} from '@root/test-mock/test-mock';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {noop} from "@root/utils/utils";

const mockStore = configureStore([]);

describe(`<Favorites/>: `, () => {

  const store = mockStore({
    USER: {
      authorizationStatus: TestMock.authorizationStatus.NOT_AUTH,
      authInfo: TestMock.authInfo,
    }
  });

  it(`should render READY correctly`, () => {

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Favorites
                onChangeFavorite={noop}
                onTitleClick={noop}
                loadFavoriteOffers={noop}
                appState={AppState.READY}
                favoriteOffers={TestMock.favoriteOffers}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render LOADING correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Favorites
                onChangeFavorite={noop}
                onTitleClick={noop}
                loadFavoriteOffers={noop}
                appState={AppState.LOADING}
                favoriteOffers={TestMock.favoriteOffers}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
