import { NextFunction, Request, Response } from "express";
import createCommentService from "../../service/Comments/createComment.service";
import authMiddleware from "../../middleware/auth.middleware";

const createCommentController = async (req: Request, res: Response) => {
  const { articleId } = req.params;
  const { commentText } = req.body;

  const userName = res.locals.userName

  const createdComment = await createCommentService({
    userId: res.locals.userId,
    articleId,
    commentText,
  });
  return res.status(201).json({...createdComment, username: userName});
};

export default createCommentController;
