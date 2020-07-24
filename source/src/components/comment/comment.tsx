import {formatTimeForReview, getRatingStars} from '@root/utils/utils';
import * as React from 'react';
import {CommentType} from '@root/types';

const WIDTH_DATE = 10;

type Props = {
  comment: CommentType;
}

export const Comment = (props: Props) => {
  const {comment} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper" key={comment.user.id}>
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">

        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRatingStars(comment.rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">{comment.comment}</p>

        <time className="reviews__time" dateTime={comment.date.slice(0, WIDTH_DATE)}>{formatTimeForReview(comment.date)}</time>
      </div>
    </li>
  );
};
