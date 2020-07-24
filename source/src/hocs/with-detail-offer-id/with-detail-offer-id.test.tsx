import withDetailOfferId from './with-detail-offer-id';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';

describe(`<withDetailOfferId/>: `, () => {

  const MockComponent = () => (
    <div/>
  );

  const MockWrapper = withDetailOfferId(MockComponent);

  it(`should render correctly`, () => {
    const wrapper = renderer
      .create(
          <MockWrapper
            onChangeDetailOfferId={noop}
            onTitleClick={noop()}
          />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
