import {Comment} from '@components/comment/comment';
import * as React from 'react';
import {CommentType} from "@root/types";

type Props = {
  comments: Array<CommentType>;
}

export const CommentsList = (props: Props) => {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {comments
        .map((comment) => (
          <Comment
            comment={comment}
            key={comment.id * Math.random()}
          />
        ))}
    </ul>
  );
};
