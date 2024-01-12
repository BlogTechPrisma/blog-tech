import { Request, Response } from "express";
import deleteCommentService from "../../service/Comments/deleteComment.service";

const deleteCommentController = async (req: Request, res: Response) => {
  const { articleId, commentId } = req.params;

  const deletedComment = await deleteCommentService({
    usersId: res.locals.userId,
    commentId: commentId,
    articleId: articleId,
  });

  return res.status(204).json(deletedComment);
};

export default deleteCommentController;
