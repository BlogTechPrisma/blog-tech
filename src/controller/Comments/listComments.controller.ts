import { Request, Response } from "express";
import listCommentsService from "../../service/Comments/listComments.service";

const listCommentsController = async (req: Request, res: Response) => {


  const commentsList = await listCommentsService();
  
  return res.status(200).json(...commentsList);
};

export default listCommentsController;
