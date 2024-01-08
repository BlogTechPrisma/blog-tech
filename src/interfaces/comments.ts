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

export interface ICommentsDelete {
  usersId: string;
  commentId: string;
  articleId: string;
}
