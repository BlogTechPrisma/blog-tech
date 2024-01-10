import { Router } from "express";
import sessionLoginController from "../controller/Session/sessionLogin.controller";

const router = Router();
export const sessionRoutes = () => {
  router.post("", sessionLoginController);

  return router
};

