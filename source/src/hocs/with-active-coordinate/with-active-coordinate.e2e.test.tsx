import withActiveCoordinate from './with-active-coordinate';
import {TestMock} from '@root/test-mock/test-mock';
import {mount} from 'enzyme';
import * as React from 'react';
import {Offer} from "@root/types";

type Props = {
  onChangerOfferCoordinate: (coordinate: Array<number>) => void;
  offer: Offer;
}

const mockComponent = (props: Props) => {
  const {onChangerOfferCoordinate, offer} = props;

  return (
    <article
      className={`place-card`}
      onMouseEnter={() => {
        onChangerOfferCoordinate(offer.location.coordinates);
      }}
      onMouseLeave={() => {
        onChangerOfferCoordinate(null);
      }}
    />
  );
};

describe(`<withActiveCoordinate/> state: `, () => {

  const initialState = {
    activeCoordinate: null,
  };
  const MockWrapper = withActiveCoordinate(mockComponent);
  const offer = TestMock.adaptedOffers[0];

  const wrapper = mount(
      <MockWrapper
        offer={offer}
      />
  );

  it(`HOC should return a changed state activeCoordinate = null`, () => {
    wrapper
      .setState(initialState)
      .find(`article.place-card`)
      .simulate(`mouseleave`);

    expect(wrapper.state().activeCoordinate).toBeNull();
  });

  it(`HOC should return a changed state activeCoordinate = coordinates`, () => {
    wrapper
      .setState(initialState)
      .find(`article.place-card`)
      .simulate(`mouseenter`);

    expect(wrapper.state().activeCoordinate).toEqual(offer.location.coordinates);
  });
});
