import { Request, Response } from "express";
import createRoleService from "../../service/Roles/createRoles.service";
import AppError from "../../errors/app.error";

const createRoleController = async (req: Request, res: Response) => {
  try {
  const { name, articles_creation, admin_privileges } = req.body;

  const newRole = await createRoleService({
    name,
    articles_creation,
    admin_privileges,
  });

  return res.status(201).json(newRole);
} catch(e) {
  if (e instanceof AppError) {
      res.status(400).json({message: e.message})
     }
}
};
export default createRoleController;
