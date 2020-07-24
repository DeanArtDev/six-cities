import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {FavoriteLocation} from './favorite-location';
import {TestMock} from '@root/test-mock/test-mock';
import {noop} from '@root/utils/utils';

describe(`<FavoriteLocation/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <FavoriteLocation
            offers={TestMock.adaptedOffers}
            city={TestMock.cities[0]}
            onChangeFavorite={noop}
            onTitleClick={noop}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
