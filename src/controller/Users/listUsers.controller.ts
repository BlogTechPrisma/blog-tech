import { Request, Response } from "express";
import listUSersService from "../../service/Users/listUsers.service";

const listUsersController = async (req: Request, res: Response) => {
  const usersList = await listUSersService();

  return res.status(200).json(usersList);
};

export default listUsersController;
