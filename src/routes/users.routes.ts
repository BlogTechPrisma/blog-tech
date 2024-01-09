import { Router } from "express";
import createUserController from "../controller/Users/createUser.controller";
import listUsersController from "../controller/Users/listUsers.controller";
import editUserController from "../controller/Users/editUser.controller";
import retrieveUserController from "../controller/Users/retrieveUser.controller";
import deleteUserController from "../controller/Users/deleteUser.controller";
import authMiddleware from "../middleware/auth.middleware";
import createCommentController from "../controller/Comments/createComment.controller";
import editCommentController from "../controller/Comments/editComment.controller";
import deleteCommentController from "../controller/Comments/deleteComment.controller";
import listCommentsController from "../controller/Comments/listComments.controller";

const router = Router();
export const usersRoutes = () => {
  router.post("", createUserController);
  router.get("", listUsersController);
  router.get("/:id", retrieveUserController)
  router.patch("/:id", editUserController)
  router.delete("/:id", deleteUserController)

  return router;
};

export default router;
