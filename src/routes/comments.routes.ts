import { Router } from "express";
import listCommentsController from "../controller/Comments/listComments.controller";
import authMiddleware from "../middleware/auth.middleware";
import createCommentController from "../controller/Comments/createComment.controller";
import editCommentController from "../controller/Comments/editComment.controller";
import deleteCommentController from "../controller/Comments/deleteComment.controller";
import retrieveCommentController from "../controller/Comments/retrieveComment.controller";

const router = Router();
export const commentsRoutes = () => {
  router.get("", authMiddleware, listCommentsController);
  router.get("/:commentId", retrieveCommentController )
  router.post("/:articleId/comments", authMiddleware, createCommentController);
  router.patch("/:articleId/:commentId", authMiddleware, editCommentController);
  router.delete("/:articleId/:commentId", authMiddleware, deleteCommentController
  );

  return router
};

export default router