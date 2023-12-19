import AppError from "../../errors/app.error";
import { ICommentsEdit } from "../../interfaces/comments";
import { prisma } from "../../utils/prisma";

const editCommentService = async ({ usersId, commentId, commentText, articleId }: ICommentsEdit) => {
  const commentExists = await prisma.comments.findUnique({
    where: {
      id: commentId
    },
  });

  if (!commentExists) {
    throw new AppError("Comment does not exists");
  }

  const commentData = await prisma.comments.update({
    where: { id: commentId, articlesId: articleId, usersId: usersId },
    data: {
      comment_text: commentText,
    },
  });

  return commentData;
};

export default editCommentService;
