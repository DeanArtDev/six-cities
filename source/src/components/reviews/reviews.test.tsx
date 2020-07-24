import {WrapperComponent as Reviews} from './reviews';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {TestMock} from '@root/test-mock/test-mock';
import {Router} from 'react-router-dom';
import history from '@root/history';
import {noop} from '@root/utils/utils';


describe(`<Reviews/>: `, () => {

  describe(`Authorization: `, () => {
    it(`should render AUTH currently`, () => {
      const tree = renderer
        .create(
            <Router
              history={history}
            >
              <Reviews
                comments={TestMock.adaptedComments}
                onFormSubmit={noop}
                isSend={false}
                isLoading={false}
                isAuth={false}
                errors={undefined}
                reviewValue={`e`}
                onRatingChange={noop}
                onReviewChange={noop}
                ratingRef={React.createRef()}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it(`should render NOT AUTH currently`, () => {
      const tree = renderer
        .create(
            <Router
              history={history}
            >
              <Reviews
                comments={TestMock.adaptedComments}
                onFormSubmit={noop}
                isSend={false}
                isLoading={false}
                isAuth={false}
                errors={undefined}
                reviewValue={`e`}
                onRatingChange={noop}
                onReviewChange={noop}
                ratingRef={React.createRef()}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`App Store: `, () => {
    it(`should render READY state currently`, () => {
      const tree = renderer
      .create(
          <Router
            history={history}
          >
            <Reviews
              comments={TestMock.adaptedComments}
              onFormSubmit={noop}
              isSend={false}
              isLoading={false}
              isAuth={true}
              errors={undefined}
              reviewValue={`e`}
              onRatingChange={noop}
              onReviewChange={noop}
              ratingRef={React.createRef()}
            />
          </Router>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it(`should render LOADING state currently`, () => {
      const tree = renderer
      .create(
          <Router
            history={history}
          >
            <Reviews
              comments={TestMock.adaptedComments}
              onFormSubmit={noop}
              isSend={false}
              isLoading={true}
              isAuth={true}
              errors={undefined}
              reviewValue={`e`}
              onRatingChange={noop}
              onReviewChange={noop}
              ratingRef={React.createRef()}
            />
          </Router>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it(`should render SEND state currently`, () => {
      const tree = renderer
      .create(
          <Router
            history={history}
          >
            <Reviews
              comments={TestMock.adaptedComments}
              onFormSubmit={noop}
              isSend={true}
              isLoading={false}
              isAuth={true}
              errors={undefined}
              reviewValue={`e`}
              onRatingChange={noop}
              onReviewChange={noop}
              ratingRef={React.createRef()}
            />
          </Router>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe(`Errors: `, () => {
    it(`should render Error currently`, () => {
      const tree = renderer
        .create(
            <Router
              history={history}
            >
              <Reviews
                comments={TestMock.adaptedComments}
                onFormSubmit={noop}
                isSend={false}
                isLoading={false}
                isAuth={true}
                errors={`error`}
                reviewValue={`e`}
                onRatingChange={noop}
                onReviewChange={noop}
                ratingRef={React.createRef()}
              />
            </Router>
        ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

