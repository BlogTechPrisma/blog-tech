import { Request, Response } from "express";
import createUserService from "../../service/Users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { email, fullName, username, password } = req.body;
  
  const createdUser = await createUserService({email, fullName, username, password});
  return res.status(201).json(createdUser);
};

export default createUserController;