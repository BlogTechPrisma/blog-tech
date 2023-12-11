import { Request, Response } from "express";
import editUserService from "../../service/Users/editUser.service";

const editUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, password } = req.body;

  const updatedUser = await editUserService({
    id: id,
    fullName,
    password,
  });

  return res.status(200).json({...updatedUser, password: undefined});
};

export default editUserController;
