import AppError from "../../errors/app.error";
import { ICommentsDelete } from "../../interfaces/comments";
import { prisma } from "../../utils/prisma";

const deleteCommentService = async ({
  usersId,
  commentId,
  articleId,
}: ICommentsDelete) => {
  const commentExists = await prisma.comments.findUnique({
    where: {
      id: commentId,
    },
  });
console.log(commentExists, "aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii aosd OSIJDFOIJSOIDJDFOIJSODIJFOIJSDIOJFOIJSDOFIO")
  if (!commentExists) {
    throw new AppError("Comment does not exists");
  }

  const commentData = await prisma.comments.delete({
    where: { id: commentId, articlesId: articleId, usersId: usersId },
  });

  return commentData;
};

export default deleteCommentService;
