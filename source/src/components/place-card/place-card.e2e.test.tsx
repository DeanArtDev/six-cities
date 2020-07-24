import PlaceCard from './place-card';
import {shallow} from 'enzyme';
import {TestMock} from '@root/test-mock/test-mock';
import * as React from 'react';
import {noop} from "@root/utils/utils";

describe(`<PlaceCard/> events: `, () => {

  let onChangerOfferCoordinate;
  const offer = TestMock.adaptedOffers[0];

  it(`MOUSEENTER should return object`, () => {
    onChangerOfferCoordinate = jest.fn(() => offer.id);
    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onChangeDetailOfferId={noop}
          onChangerOfferCoordinate={onChangerOfferCoordinate}
          onChangeFavorite={noop}
          onTitleClick={noop}
          isNear={true}
          key={(+new Date() * Math.random())}
        />
    );

    placeCard.find(`article.place-card`).simulate(`mouseenter`);

    expect(onChangerOfferCoordinate.mock.results[0].value).toEqual(offer.id);
  });
  it(`MOUSELEAVE should return null`, () => {
    onChangerOfferCoordinate = jest.fn(() => null);
    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onChangeDetailOfferId={noop}
          onChangerOfferCoordinate={onChangerOfferCoordinate}
          onChangeFavorite={noop}
          onTitleClick={noop}
          isNear={true}
          key={(+new Date() * Math.random())}
        />
    );

    placeCard.find(`article.place-card`).simulate(`mouseleave`);

    expect(onChangerOfferCoordinate.mock.results[0].value).toBeNull();
  });
  it(`CLICK on title`, () => {
    const onClick = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onChangeDetailOfferId={noop}
          onChangerOfferCoordinate={noop}
          onChangeFavorite={noop}
          onTitleClick={onClick}
          isNear={true}
          key={(+new Date() * Math.random())}
        />
    );

    placeCard.find(`h2.place-card__name`).simulate(`click`, {preventDefault: onClick});

    expect(onClick).toHaveBeenCalledTimes(2);
  });
  it(`CLICK on button favorite`, () => {
    const onClick = jest.fn();
    const placeCard = shallow(
        <PlaceCard
          offer={offer}
          onChangeDetailOfferId={noop}
          onChangerOfferCoordinate={noop}
          onChangeFavorite={onClick}
          onTitleClick={noop}
          isNear={true}
          key={(+new Date() * Math.random())}
        />
    );

    placeCard.find(`button.place-card__bookmark-button`).simulate(`click`, {preventDefault: onClick});

    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
