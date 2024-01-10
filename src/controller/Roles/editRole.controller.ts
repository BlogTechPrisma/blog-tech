import { Request, Response } from "express";
import editRoleService from "../../service/Roles/editRole.service";

const editRoleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, articles_creation, admin_privileges } = req.body;

  const updatedRole = await editRoleService({
    id: id,
    name,
    articles_creation,
    admin_privileges,
  });

  

  return res.status(200).json({ data: updatedRole });
};

export default editRoleController;
