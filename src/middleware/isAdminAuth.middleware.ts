import { NextFunction, Request, Response } from "express";
import { prisma } from "../utils/prisma";
import AppError from "../errors/app.error";

const isAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { params } = req;

  const user = await prisma.users.findUnique({
    where: {
      id: String(params.id),
    },
    include: {
      Roles: true,
    },
  });

  if (user?.Roles?.admin_privileges != true) {
    throw new AppError("Unauthorized", 401);
  }
};
