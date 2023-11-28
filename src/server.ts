import express, { NextFunction, Request, Response } from "express";
import rolesRouter from "./routes/roles.routes";

const app = express();
app.use(express.json());

app.use("/roles", rolesRouter);

// const PORT = process.env.PORT || 3001
app.get("/", (req: Request, res: Response) => {
  console.log("oieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  return res.json({ message: "hi" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json({
    error: "erro de server",
  });
});

app.listen(3000, () => console.log("Server started!!!"));
