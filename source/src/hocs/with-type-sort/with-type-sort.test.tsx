import withTypeSort from './with-type-sort';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {OffersSortTypes} from '@root/types';
import {noop} from '@root/utils/utils';

describe(`<withTypeSort/>: `, () => {

  const MockComponent = () => (
    <div/>
  );

  const MockWrapper = withTypeSort(MockComponent);

  it(`should render correctly`, () => {
    const wrapper = renderer
      .create(
          <MockWrapper
            typeSort={OffersSortTypes.POPULAR}
            onTypeSort={noop}
          />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
