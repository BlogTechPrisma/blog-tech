import { Router } from "express";
import createUserController from "../controller/Users/createUser.controller";

const router = Router();
export const usersRoutes = () => {
  router.post("", createUserController);

  return router;
};

export default router;
