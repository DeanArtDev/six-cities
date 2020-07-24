import {PlacesOption} from './places-option';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';

describe(`<PlacesOption/>: `, () => {

  it(`should render opened`, () => {
    const tree = renderer
      .create(
          <PlacesOption
            typeSort={``}
            onTypeSort={noop}
            isShow={true}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should render closed`, () => {
    const tree = renderer
      .create(
          <PlacesOption
            typeSort={``}
            onTypeSort={noop}
            isShow={false}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
