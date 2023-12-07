import { Express } from "express";
import { handleErrorMiddleware } from "../middleware/handleerror.middleware";
import { rolesRoutes } from "../routes/roles.routes";
import { usersRoutes } from "./users.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/roles", rolesRoutes());
  app.use(handleErrorMiddleware);
};
