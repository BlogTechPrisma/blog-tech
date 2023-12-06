import { NextFunction, Request, Response } from "express";
import createRoleService from "../../service/Roles/createRoles.service";

const createRoleController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, articles_creation, admin_privileges } = req.body;

  const newRole = await createRoleService({
    name,
    articles_creation,
    admin_privileges,
  });

  return res.status(201).json(newRole);
};
export default createRoleController;
