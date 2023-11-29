import express, { NextFunction, Request, Response } from "express";
import rolesRouter from "./routes/roles.routes";
import AppError from "./middleware/app.error.middleware";
require('express-async-errors')

const app = express();
app.use(express.json());

app.use("/roles", rolesRouter);

// const PORT = process.env.PORT || 3001
app.get("/", (req: Request, res: Response) => {
  console.log("oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  return res.json({ message: "hi" });
});

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.statusCode
// });

app.listen(3000, () => console.log("Server started!!!"));
