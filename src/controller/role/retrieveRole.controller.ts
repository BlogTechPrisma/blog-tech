import { NextFunction, Request, Response } from "express";
import retrieveRoleService from "../../service/Roles/retrieveRole.service";
import AppError from "../../errors/app.error";
import { error } from "console";
import { resolveCname } from "dns";

const retrieveRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { roleName } = req.params;
    const retrievedRole = await retrieveRoleService(roleName);

    return res.status(200).json(retrievedRole);
  } catch (e) {
    if (e instanceof AppError) {
      res.status(e.statusCode).json({ message: e.message});
    }
  }
};

export default retrieveRoleController;
