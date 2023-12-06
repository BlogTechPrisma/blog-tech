import { ErrorRequestHandler } from "express";
import AppError from "../errors/app.error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Prisma } from "@prisma/client";

export const handleErrorMiddleware: ErrorRequestHandler = async (
  error,
  req,
  res,
  next
) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(400).json({ message: "teste", meta: error });
  }
  console.log(error);
  return res.status(500).json({
    message: "Internal server error",
  });
};
