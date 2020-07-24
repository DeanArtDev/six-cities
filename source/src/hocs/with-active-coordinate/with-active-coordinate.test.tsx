import withActiveCoordinate from './with-active-coordinate';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';

describe(`<withActiveCoordinate/>: `, () => {

  const MockComponent = () => (
    <div/>
  );

  const MockWrapper = withActiveCoordinate(MockComponent);

  it(`should render correctly`, () => {
    const wrapper = renderer
      .create(
          <MockWrapper
            activeCoordinate={noop}
            onChangerOfferCoordinate={noop()}
          />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
