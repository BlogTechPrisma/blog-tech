import { Request, Response } from "express";
import deleteRoleService from "../../service/Roles/deleteRoleService.service";
import AppError from "../../errors/app.error";

const deleteRoleController = async (req: Request, res: Response) => {

    const { id } = req.params;

    const deletedUser = await deleteRoleService({id: id});

    return res.status(204).json(deletedUser);
};

export default deleteRoleController;
