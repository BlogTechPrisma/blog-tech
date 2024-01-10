import { ICommentsCreate } from "../../interfaces/comments";
import { prisma } from "../../utils/prisma";

const createCommentService = async ({
  commentText,
  userId,
  articleId,
}: ICommentsCreate) => {
  const commentData = await prisma.comments.create({
    data: {
      articlesId: articleId,
      comment_text: commentText,
      usersId: userId,
    },
  });

  return commentData;
};

export default createCommentService;
