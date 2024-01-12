import AppError from "../../errors/app.error";
import { prisma } from "../../utils/prisma";

const retrieveCommentService = async (commentId: string) => {
  const commentExists = await prisma.comments.findUnique({
    where: {
      id: commentId,
    },
    include: {
        Users: {
            select: {
                full_name: true
            }
        }
    },
  });

  if (!commentExists) {
    throw new AppError("Comment does not exists");
  }

  return commentExists;
};

export default retrieveCommentService;
