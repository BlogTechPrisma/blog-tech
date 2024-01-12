import { Request, Response } from "express";
import retrieveCommentService from "../../service/Comments/retrieveComment.service";

const retrieveCommentController = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  const retrievedComment = await retrieveCommentService(commentId);

  return res.status(200).json(retrievedComment);
};

export default retrieveCommentController;
