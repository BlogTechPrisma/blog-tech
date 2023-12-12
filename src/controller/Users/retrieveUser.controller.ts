import { Request, Response } from "express";
import retrieveUserService from "../../service/Users/retrieveUser.service";

const retrieveUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const listedUser = await retrieveUserService({ id: id });

  return res.status(200).json({ ...listedUser, password: undefined });
};

export default retrieveUserController;
