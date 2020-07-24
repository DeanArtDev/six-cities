import {AppState} from '@root/types';
import * as React from 'react';
import {Authorization, Id} from '@root/types';
import {Subtract} from 'utility-types';

const MINIMUM_SYMBOLS_IN_REVIEW = 50;
const LIMITATION_SYMBOLS_IN_REVIEW = 300;

type Review = {
  comment: string;
  rating: number;
}

interface InjectingProps {
  appState: string;
  detailId: Id;
  authStatus: string;
  onFormSubmit: (id: Id, review: Review) => void;
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  reviewValue: string;
  isSend: boolean;
  ratingRef: React.RefObject<HTMLDivElement>;
  isLoading: boolean;
  isAuth: boolean;
}

interface State {
  review: string | null;
  rating: string | null;
}

const withSendReview = (Component) => {
  type T = React.ComponentProps<typeof Component>;
  type P = Subtract<T, InjectingProps>;

  return class WithSendReview extends React.PureComponent<P, State> {
    props: P;
    state: State;
    private ratingRef: React.RefObject<HTMLDivElement>;

    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: null,
      };

      this.ratingRef = React.createRef();

      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    componentDidUpdate() {
      const {appState} = this.props;

      if (appState === AppState.SENT) {
        this._clearReview();
      }
    }
    _clearReview() {
      const inputsRating: HTMLCollection = this.ratingRef.current.children;

      Array.from(inputsRating).forEach((input: HTMLInputElement) => {
        if (input.tagName === `INPUT`) {
          input.checked = false;
        }
      });
      this.setState({
        review: ``,
        rating: null,
      });
    }

    _handleFormSubmit() {
      const {onFormSubmit, detailId} = this.props;

      onFormSubmit(detailId, {
        comment: this.state.review,
        rating: parseInt(this.state.rating, 10),
      });
    }
    _handleReviewChange(evt) {
      this.setState({review: evt.target.value});
    }
    _handleRatingChange(evt) {
      this.setState({rating: evt.target.value});
    }
    _validationReview() {
      return !!(
        this.state.review.length >= MINIMUM_SYMBOLS_IN_REVIEW
        &&
        this.state.review.length <= LIMITATION_SYMBOLS_IN_REVIEW
        &&
        this.state.rating
      );
    }

    render() {
      const {appState, authStatus} = this.props;

      return (
        <Component
          {...this.props}
          reviewValue={this.state.review}
          onReviewChange={this._handleReviewChange}
          onRatingChange={this._handleRatingChange}
          onFormSubmit={this._handleFormSubmit}
          isSend={!this._validationReview()}
          ratingRef={this.ratingRef}
          isLoading={appState === AppState.LOADING}
          isAuth={authStatus === Authorization.AUTH}
        />
      );
    }
  };
};

export default withSendReview;
