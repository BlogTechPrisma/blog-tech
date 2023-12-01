import { Request, Response } from "express";
import createArticleService from "../../service/Articles/createArticle.service";
import AppError from "../../errors/app.error";

const createArticleController = async (req: Request, res: Response) => {
    try {
        const { user_id, user_name, content } = req.body;

        const newArticle = await createArticleService({
            user_id,
            user_name,
            content,
        });
        return res.status(201).json(newArticle);
    } catch (err) {
        if (err instanceof AppError) {
            res.status(err.statusCode).json({ message: err.message });
        }
    }
};

export default createArticleController;
