import { Router } from "express";
import createUserController from "../controller/Users/createUser.controller";
import listUsersController from "../controller/Users/listUsers.controller";
import editUserController from "../controller/Users/editUser.controller";

const router = Router();
export const usersRoutes = () => {
  router.post("", createUserController);
  router.patch("/:id", editUserController)
  router.get("", listUsersController);

  return router;
};

export default router;
