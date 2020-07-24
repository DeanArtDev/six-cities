import {WrappedComponent as CitiesMapContainer} from './cities-map-container';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe(`<CitiesMapContainer/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <CitiesMapContainer/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
