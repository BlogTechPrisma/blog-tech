import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app.error";
import jwt from "jsonwebtoken";

const isAdminAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization?.split(" ")[1];

  jwt.verify(
    token as string,
    process.env.SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (!decoded.adminPrivileges || err) {
        throw new AppError("Unauthorized", 401);
      }
      next();
    }
  );
};
export default isAdminAuthMiddleware;
