import {WrappedComponent as DetailMapContainer} from './detail-map-container';
import * as renderer from 'react-test-renderer';
import * as React from 'react';

describe(`<DetailMapContainer/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <DetailMapContainer/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
