import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {CitiesEmpty} from './cities-empty';

describe(`<CitiesEmpty/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(
          <CitiesEmpty/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
