import {FavoritesEmpty} from './favorite-empty';
import {AppState} from '@root/types';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe(`<FavoritesEmpty/>: `, () => {

  it(`should render READY correctly`, () => {
    const tree = renderer
      .create(
          <FavoritesEmpty
            appState={AppState.READY}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`should render LOADING correctly`, () => {
    const tree = renderer
      .create(
          <FavoritesEmpty
            appState={AppState.LOADING}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
