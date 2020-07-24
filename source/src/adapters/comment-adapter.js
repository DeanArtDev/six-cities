/**
 * Adapts from server data to Dev data
 *
 * @constructor
 * @method adaptComment
 * @method adaptComments
 * @param {object} comment
 * @return {object} CommentAdapter
 * */
export default class CommentAdapter {
  constructor(comment) {
    this.user = {
      id: comment.user.id,
      isPro: comment.user.is_pro,
      name: comment.user.name,
      avatarUrl: comment.user.avatar_url || comment.user.avatarUrl,
    };
    this.id = comment.id;
    this.rating = comment.rating;
    this.date = comment.date;
    this.comment = comment.comment;
  }

  static adaptComment(comment) {
    return new CommentAdapter(comment);
  }
  static adaptComments(comments) {
    return comments.map((comment) => CommentAdapter.adaptComment(comment));
  }
}
