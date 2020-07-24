import withMap from './with-map';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {TestMock} from '@root/test-mock/test-mock';

describe(`<withMap/>: `, () => {

  const WrappedComponent = React.forwardRef(
      function mockComponent(props, ref: React.LegacyRef<HTMLElement>) {
        return (
          <section className="map" id="map" ref={ref}/>
        );
      }
  );

  const MockWrapper = withMap(WrappedComponent);

  it(`should render correctly`, () => {
    const wrapper = renderer
      .create(
          <MockWrapper
            coordinates={TestMock.coordinates}
            activeCoordinate={TestMock.coordinates[0]}
            settingMap={TestMock.settingMap}
          />,
          {createNodeMock: () => document.createElement(`section`)}
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
