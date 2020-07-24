import * as React from 'react';
import {FavoritePlaceCard} from './favorite-place-card';
import {mount} from 'enzyme';
import {TestMock} from '@root/test-mock/test-mock';

describe(`<FavoritePlaceCard/> event: `, () => {
  const onTitleClick = jest.fn((id) => id);
  const onChangeFavorite = jest.fn((id) => id);

  const wrapper = mount(
      <FavoritePlaceCard
        offer={TestMock.adaptedOffers[0]}
        onTitleClick={onTitleClick}
        onChangeFavorite={onChangeFavorite}
      />
  );

  it(`CLICK on button should return id`, () => {
    wrapper
      .find(`a.preview-img`)
      .first()
      .simulate(`click`);

    expect(onTitleClick.mock.results[0].value).toEqual(TestMock.adaptedOffers[0].id);
  });
  it(`CLICK on a should return id`, () => {
    wrapper
      .find(`a.preview-img`)
      .at(1)
      .simulate(`click`);

    expect(onTitleClick.mock.results[0].value).toEqual(TestMock.adaptedOffers[0].id);
  });
  it(`CLICK on title should return id`, () => {
    wrapper.find(`button.place-card__bookmark-button`)
      .simulate(`click`);

    expect(onChangeFavorite.mock.results[0].value).toEqual(TestMock.adaptedOffers[0].id);
  });
});

