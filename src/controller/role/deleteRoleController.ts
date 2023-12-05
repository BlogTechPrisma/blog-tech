import { Request, Response } from "express";
import deleteRoleService from "../../service/Roles/deleteRoleService.service";
import AppError from "../../errors/app.error";

const deleteRoleController = async (req: Request, res: Response) => {
  try {
    const { roleName } = req.params;

    const deletedUser = await deleteRoleService(roleName);

    return res.status(204).json(deletedUser);
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(e.statusCode).json({ message: e.message });
    }
  }
};

export default deleteRoleController;
