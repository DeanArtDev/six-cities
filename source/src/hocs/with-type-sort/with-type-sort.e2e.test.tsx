import withTypeSort from './with-type-sort';
import {mount} from 'enzyme';
import {OffersSortTypes} from '@root/types';
import * as React from 'react';
import {noop} from "@root/utils/utils";

type Props = {
  onTypeSort: (typeSort: string) => void;
  typeSort: string;
}

const mockComponent = (props: Props) => {
  const {onTypeSort, typeSort} = props;

  return (
    <div
      onClick={() => {
        onTypeSort(OffersSortTypes.HIGH_TO_LOW);
      }}
    >
      {typeSort}
    </div>
  );
};

describe(`<withTypeSort/> state: `, () => {

  let initialState;
  const MockWrapper = withTypeSort(mockComponent);

  const wrapper = mount(
      <MockWrapper
        onTypeSort={noop}
        typeSort={OffersSortTypes.POPULAR}
      />
  );

  beforeEach(() => {
    initialState = {
      typeSort: OffersSortTypes.POPULAR,
    };
  });

  it(`HOC should return a changed state typeSort = OffersSortTypes.HIGH_TO_LOW`, () => {
    wrapper
      .setState(initialState)
      .simulate(`click`);

    expect(wrapper.state().typeSort).toEqual(OffersSortTypes.HIGH_TO_LOW);
  });

  it(`HOC should return a change typeSort`, () => {
    wrapper
      .setState(initialState)
      .simulate(`click`);

    expect(wrapper.text()).toEqual(OffersSortTypes.HIGH_TO_LOW);
  });
});
