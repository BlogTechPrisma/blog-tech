import { Request, Response } from "express";
import retrieveRoleService from "../../service/Roles/retrieveRole.service";

const retrieveRoleController = async (req: Request, res: Response) => {
  const { roleName } = req.params;
  const retrievedRole = await retrieveRoleService(roleName);

  return res.status(200).json(retrievedRole);
};

export default retrieveRoleController;
