import { Request, Response } from "express";
import listRolesService from "../../service/Roles/listRoles.service";
import AppError from "../../errors/app.error";

const listRolesController = async (req: Request, res: Response) => {
  try{
  const rolesList = await listRolesService();

  return res.status(200).json(rolesList);
  } catch (e) {
    if(e instanceof AppError) {
      res.status(e.statusCode).json({message: e.message})
    }
  }
};

export default listRolesController;
