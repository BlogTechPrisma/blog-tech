import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/app.error";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (!decoded || err) {
        throw new AppError("Invalid token", 401);
      }
      res.locals = { userId: decoded.id, userName: decoded.username };
      next();
    }
  );
};

export default authMiddleware;
