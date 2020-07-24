import {FavoritePlaceCard} from './favorite-place-card';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {TestMock} from '@root/test-mock/test-mock';
import {noop} from '@root/utils/utils';

describe(`<FavoritePlaceCard/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <FavoritePlaceCard
            offer={TestMock.adaptedOffers[0]}
            onChangeFavorite={noop}
            onTitleClick={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
