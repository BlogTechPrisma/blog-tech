import express, { NextFunction, Request, Response } from "express";
import rolesRouter from "./routes/roles.routes";
import { handleErrorMiddleware } from "./middleware/handleerror.middleware";
require("express-async-errors");

const app = express();
app.use(express.json());
app.use("/roles", rolesRouter);

app.use(handleErrorMiddleware);

export default app;
