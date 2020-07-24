import withActive from './with-active';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';

describe(`<withActive/>: `, () => {

  const MockComponent = () => (
    <div/>
  );

  const MockWrapper = withActive(MockComponent);

  it(`should render correctly`, () => {
    const wrapper = renderer
      .create(
          <MockWrapper
            isActive={true}
            onChangeActive={noop()}
          />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
