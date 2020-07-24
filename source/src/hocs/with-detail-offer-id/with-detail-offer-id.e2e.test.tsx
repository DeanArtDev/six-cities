import withDetailOfferId from './with-detail-offer-id';
import {TestMock} from '@root/test-mock/test-mock';
import {mount} from 'enzyme';
import * as React from 'react';
import {Id, Offer} from "@root/types";
import {noop} from "@root/utils/utils";

type Props = {
  onChangeDetailOfferId: (id: Id) => void;
  offer: Offer;
}

const mockComponent = (props: Props) => {
  const {onChangeDetailOfferId, offer} = props;

  return (
    <article
      className={`place-card`}
      onMouseEnter={() => {
        onChangeDetailOfferId(offer.id);
      }}
      onMouseLeave={() => {
        onChangeDetailOfferId(null);
      }}
    />
  );
};

const MockWrapper = withDetailOfferId(mockComponent);

describe(`<withDetailOfferId/> state: `, () => {

  const offer = TestMock.adaptedOffers[0];
  const initialState = {
    detailOfferId: null,
  };

  const wrapper = mount(
      <MockWrapper
        offer={offer}
        onTitleClick={noop}
      />
  );

  it(`HOC should return a changed state detailOfferId = null`, () => {
    wrapper
      .setState(initialState)
      .find(`article.place-card`)
      .simulate(`mouseleave`);

    expect(wrapper.state().detailOfferId).toBeNull();
  });

  it(`HOC should return a changed state detailOfferId = Id`, () => {
    wrapper
      .setState(initialState)
      .find(`article.place-card`)
      .simulate(`mouseenter`);

    expect(wrapper.state().detailOfferId).toEqual(offer.id);
  });
});
