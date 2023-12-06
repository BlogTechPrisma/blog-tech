import { NextFunction, Request, Response } from "express";
import retrieveRoleService from "../../service/Roles/retrieveRole.service";
import AppError from "../../errors/app.error";

const retrieveRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
    const { id } = req.params;
    const retrievedRole = await retrieveRoleService({id: id});

    return res.status(200).json(retrievedRole);
  
  
};

export default retrieveRoleController;
