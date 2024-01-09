import { Express } from "express";
import { handleErrorMiddleware } from "../middleware/handleerror.middleware";
import { rolesRoutes } from "../routes/roles.routes";
import { usersRoutes } from "./users.routes";
import { sessionRoutes } from "./session.routes";
import { commentsRoutes } from "./comments.routes";

export const appRoutes = (app: Express) => {
  app.use("/session", sessionRoutes())
  app.use("/users", usersRoutes());
  app.use("/roles", rolesRoutes());
  app.use("/comments", commentsRoutes());
  app.use(handleErrorMiddleware);
};
