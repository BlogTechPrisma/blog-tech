import { Router } from "express";
import createUserController from "../controller/Users/createUser.controller";
import listUsersController from "../controller/Users/listUsers.controller";
import deletePass from "../middleware/excludePassword.middleware";

const router = Router();
export const usersRoutes = () => {
  router.post("", createUserController);
  router.get("", listUsersController);

  return router;
};

export default router;
