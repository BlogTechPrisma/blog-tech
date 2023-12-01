import { NextFunction, Request, Response } from "express";
import retrieveRoleService from "../../service/Roles/retrieveRole.service";
import AppError from "../../errors/app.error";

const retrieveRoleController = async (req: Request, res: Response) => {
  try{
  const { roleName } = req.params;
  const retrievedRole = await retrieveRoleService(roleName);

  return res.status(200).json(retrievedRole);
  } catch (e) {
     if (e instanceof AppError) {
      res.status(e.statusCode).json(e.message)
     }
  }
};

export default retrieveRoleController;
