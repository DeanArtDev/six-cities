import {CommentsList} from '@components/comments-list/comments-list';
import * as React from 'react';
import {CommentType} from '@root/types';

type Props = {
  onReviewChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRatingChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFormSubmit: () => void;
  ratingRef: React.RefObject<HTMLDivElement>;
  comments: Array<CommentType>;
  errors: string;
  reviewValue: string;
  isLoading: boolean;
  isAuth: boolean;
  isSend: boolean;
}

export const WrapperComponent = React.memo<Props>(
    function Reviews(props: Props) {
      const {
        comments,
        reviewValue,
        onReviewChange,
        onRatingChange,
        onFormSubmit,
        ratingRef,
        errors,
        isLoading,
        isAuth,
        isSend = true
      } = props;

      return (
        <section className="property__reviews reviews">
          <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

          <CommentsList
            comments={comments}
          />

          {isAuth &&
            <form
              className="reviews__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                onFormSubmit();
              }}
            >
              <label
                className={`reviews__label form__label${errors ? ` error-message` : ``}`}
                htmlFor="review"
              >
                {errors || `Your review`}
              </label>

              <div
                className="reviews__rating-form form__rating"
                ref={ratingRef}
              >
                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value="5"
                  id="5-stars"
                  type="radio"
                  disabled={isLoading}
                  onChange={onRatingChange}
                />
                <label
                  htmlFor="5-stars"
                  className="reviews__rating-label form__rating-label"
                  title="perfect"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value="4"
                  id="4-stars"
                  type="radio"
                  disabled={isLoading}
                  onChange={onRatingChange}
                />
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value="3"
                  id="3-stars"
                  type="radio"
                  disabled={isLoading}
                  onChange={onRatingChange}
                />
                <label
                  htmlFor="3-stars"
                  className="reviews__rating-label form__rating-label"
                  title="not bad"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value="2"
                  id="2-stars"
                  type="radio"
                  disabled={isLoading}
                  onChange={onRatingChange}
                />
                <label
                  htmlFor="2-stars"
                  className="reviews__rating-label form__rating-label"
                  title="badly"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>

                <input
                  className="form__rating-input visually-hidden"
                  name="rating"
                  value="1"
                  id="1-star"
                  type="radio"
                  disabled={isLoading}
                  onChange={onRatingChange}
                />
                <label
                  htmlFor="1-star"
                  className="reviews__rating-label form__rating-label"
                  title="terribly"
                >
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"/>
                  </svg>
                </label>
              </div>
              <textarea
                value={reviewValue}
                className="reviews__textarea form__textarea"
                id="review"
                name="review"
                disabled={isLoading}
                placeholder={`Tell how was your stay, what you like and what can be improved`}
                onChange={onReviewChange}
              />
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set
                  <span className="reviews__star">rating</span>
                  and describe your stay with at least
                  <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button
                  className="reviews__submit form__submit button"
                  type="submit"
                  disabled={isSend || isLoading}
                >
                  {isLoading ? `Loading...` : `Submit`}
                </button>
              </div>
            </form>
          }

        </section>
      );
    }
);
