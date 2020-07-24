import {MainEmpty} from './main-empty';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe(`<MainEmpty/>: `, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(<MainEmpty/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
