import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {FavoriteOffersList} from './favorite-offers-list';
import {TestMock} from '@root/test-mock/test-mock';
import {noop} from "@root/utils/utils";

describe(`<FavoriteOffersList/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <FavoriteOffersList
            favoriteOffers={TestMock.favoriteOffers}
            onChangeFavorite={noop}
            onTitleClick={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
