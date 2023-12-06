import { Express } from "express";
import { handleErrorMiddleware } from "../middleware/handleerror.middleware";
import { rolesRoutes } from "../routes/roles.routes";


export const appRoutes = (app: Express) => {
    
    app.use("/roles", rolesRoutes());
    app.use(handleErrorMiddleware);
}


