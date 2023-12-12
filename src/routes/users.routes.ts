import { Router } from "express";
import createUserController from "../controller/Users/createUser.controller";
import listUsersController from "../controller/Users/listUsers.controller";
import editUserController from "../controller/Users/editUser.controller";
import retrieveUserController from "../controller/Users/retrieveUser.controller";
import deleteUserController from "../controller/Users/deleteUser.controller";

const router = Router();
export const usersRoutes = () => {
  router.post("", createUserController);
  router.patch("/:id", editUserController)
  router.delete("/:id", deleteUserController)
  router.get("", listUsersController);
  router.get("/:id", retrieveUserController)

  return router;
};

export default router;
