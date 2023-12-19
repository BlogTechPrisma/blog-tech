import { Request, Response } from "express";
import editCommentService from "../../service/Comments/editComment.service";

const editCommentController = async (req: Request, res: Response) => {
  const { articleId, commentId } = req.params;
  const { commentText } = req.body;

  const editedComment = await editCommentService({
    usersId: res.locals.userId,
    commentId: commentId,
    articleId: articleId,
    commentText,
  });

  return res.status(203).json(editedComment);
};

export default editCommentController;
