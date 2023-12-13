import { Request, Response } from "express";
import sessionLoginService from "../../service/Session/sessionLogin.service";

const sessionLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await sessionLoginService({ email, password });

  return res.status(200).json({ token });
};

export default sessionLoginController;
