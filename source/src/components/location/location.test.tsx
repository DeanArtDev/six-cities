import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Location} from '@components/location/location';
import {noop} from '@root/utils/utils';
import {TestMock} from '@root/test-mock/test-mock';


describe(`<Location/>: `, () => {

  it(`should render`, () => {
    const tree = renderer.create(
        <Location
          onLocationClick={noop}
          currentCity={`Paris`}
          cities={TestMock.cities}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
