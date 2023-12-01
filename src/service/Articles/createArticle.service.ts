import AppError from "../../errors/app.error";
import { iCreateArticle } from "../../interfaces/articles";
import { prisma } from "../Roles/createRoles.service";

const createArticleService = async ({
    user_id,
    user_name,
    content,
}: iCreateArticle) => {
    if (!content) {
        throw new AppError("Invalid content");
    }

    const articleData = await prisma.articles.create({
        data: {
            usersId: user_id,
            content: content,
            usersName: user_name,
        },
    });
    return { data: articleData };
};

export default createArticleService;
