import { Request, Response } from "express";
import listCommentsService from "../../service/Comments/listComments.service";

const listCommentsController = async (req: Request, res: Response) => {


  const commentsList = await listCommentsService();
    console.log(commentsList, "AQUIIIIIIIIIIIIIII OOOOOIOIOIOIOIOIOIOOIOIOIOII")
  return res.status(200).json(...commentsList);
};

export default listCommentsController;
