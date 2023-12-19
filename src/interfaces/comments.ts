export interface ICommentsCreate {
  commentText: string;
  userId: string;
  articleId: string;
}

export interface ICommentsEdit {
  usersId: string;
  commentId: string;
  commentText: string;
  articleId: string;
}
