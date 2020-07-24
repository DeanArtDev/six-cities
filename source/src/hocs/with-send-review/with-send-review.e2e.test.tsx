import withSendReview from './with-send-review';
import {mount} from 'enzyme';
import {AppState} from '@root/types';
import {Authorization} from '@root/types';
import * as React from 'react';

type Props = {
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: () => void;
}

const mockComponent = (props: Props) => {
  const {onReviewChange, onRatingChange, onFormSubmit} = props;

  return (
    <React.Fragment>
      <input
        name={`rating`}
        value="3"
        onChange={onRatingChange}
        onSubmit={onFormSubmit}
      />
      <textarea
        name={`review`}
        value={`test`}
        onChange={onReviewChange}
        onSubmit={onFormSubmit}
      />
    </React.Fragment>
  );
};

describe(`<withSendReview/> state: `, () => {

  let initialState;
  const MockWrapper = withSendReview(mockComponent);
  const onFormSubmit = jest.fn((id, review) => {
    return {
      id,
      review
    };
  });

  const wrapper = mount(
      <MockWrapper
        onFormSubmit={onFormSubmit}
        detailId={333}
        appState={AppState.READY}
        authStatus={Authorization.AUTH}
      />
  );

  it(`HOC should return changed state review`, () => {
    initialState = {
      review: ``,
      rating: null,
    };

    wrapper
      .setState(initialState)
      .find(`textarea`)
      .simulate(`change`, {
        target: {
          name: `review`,
          value: `test`,
        }
      });

    expect(wrapper.state().review).toEqual(`test`);
  });

  it(`HOC should return changed state rating`, () => {
    initialState = {
      review: ``,
      rating: null,
    };

    wrapper
      .setState(initialState)
      .find(`input`)
      .simulate(`change`, {
        target: {
          name: `rating`,
          value: `3`,
        }
      });

    expect(wrapper.state().rating).toEqual(`3`);
  });

  it(`HOC should submit comment`, () => {
    initialState = {
      review: `COMMENT`,
      rating: 3,
    };

    wrapper
      .setState(initialState)
      .simulate(`submit`);

    expect(onFormSubmit.mock.results[0].value).toEqual({
      'id': 333,
      'review': {
        'comment': `COMMENT`,
        'rating': 3
      }
    });
  });
});
