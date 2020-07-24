import withValidSingIn from './with-valid-sing-in';
import {AppState} from '@root/types';
import {Authorization} from '@root/types';
import {TestMock} from '@root/test-mock/test-mock';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '@root/utils/utils';

describe(`<withValidSingIn/>: `, () => {

  const WrappedComponent = React.forwardRef(
      function mockComponent(props, ratingRef: React.LegacyRef<HTMLElement>) {
        return (
          <section ref={ratingRef}/>
        );
      }
  );

  const MockWrapper = withValidSingIn(WrappedComponent);

  describe(`App State: `, () => {
    it(`should render READY correctly`, () => {
      const wrapper = renderer
        .create(
            <MockWrapper
              currentCity={TestMock.cities[0]}
              appState={AppState.READY}
              authStatus={Authorization.AUTH}
              onSubmit={noop}
              checkAuth={noop}
              errors={null}
            />,
            {createNodeMock: () => document.createElement(`section`)}
        ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
    it(`should render LOADING correctly`, () => {
      const wrapper = renderer
        .create(
            <MockWrapper
              currentCity={TestMock.cities[0]}
              appState={AppState.LOADING}
              authStatus={Authorization.AUTH}
              onSubmit={noop}
              checkAuth={noop}
              errors={null}
            />,
            {createNodeMock: () => document.createElement(`section`)}
        ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe(`Errors: `, () => {
    it(`should render error correctly`, () => {
      const wrapper = renderer
        .create(
            <MockWrapper
              currentCity={TestMock.cities[0]}
              appState={AppState.LOADING}
              authStatus={Authorization.AUTH}
              onSubmit={noop}
              checkAuth={noop}
              errors={`errors`}
            />,
            {createNodeMock: () => document.createElement(`section`)}
        ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });

  });

});
