import { Request, Response } from "express";
import listRolesService from "../../service/Roles/listRoles.service";

const listRolesController = async (req: Request, res: Response) => {
  const rolesList = await listRolesService();

  return res.status(200).json(rolesList);
};

export default listRolesController;
