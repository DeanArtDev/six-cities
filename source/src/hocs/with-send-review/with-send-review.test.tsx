import withSendReview from './with-send-review';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {AppState, Authorization} from '@root/types';
import {noop} from '@root/utils/utils';


describe(`<withSendReview/>: `, () => {

  const WrappedComponent = React.forwardRef(
      function mockComponent(props, ratingRef: React.LegacyRef<HTMLElement>) {
        return (
          <section ref={ratingRef}/>
        );
      }
  );

  const MockWrapper = withSendReview(WrappedComponent);

  describe(`App State: `, () => {
    it(`should render READY correctly`, () => {
      const wrapper = renderer
       .create(
           <MockWrapper
             reviewValue={`Yes`}
             onValueChange={noop}
             onFormSubmit={noop}
             ratingRef={{}}
             detailId={333}
             appState={AppState.READY}
             authStatus={Authorization.AUTH}
           />,
           {createNodeMock: () => document.createElement(`section`)}
       ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
    it(`should render LOADING correctly`, () => {
      const wrapper = renderer
       .create(
           <MockWrapper
             reviewValue={`Yes`}
             onValueChange={noop}
             onFormSubmit={noop}
             ratingRef={{}}
             detailId={333}
             appState={AppState.LOADING}
             authStatus={Authorization.AUTH}
           />,
           {createNodeMock: () => document.createElement(`section`)}
       ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
    it(`should render SENT correctly`, () => {
      const wrapper = renderer
       .create(
           <MockWrapper
             reviewValue={`Yes`}
             onValueChange={noop}
             onFormSubmit={noop}
             ratingRef={{}}
             detailId={333}
             appState={AppState.SENT}
             authStatus={Authorization.AUTH}
           />,
           {createNodeMock: () => document.createElement(`section`)}
       ).toJSON();

      expect(wrapper).toMatchSnapshot();
    });
  });
});
