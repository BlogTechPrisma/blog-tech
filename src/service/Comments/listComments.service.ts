import { exclude, prisma } from "../../utils/prisma";

const listCommentsService = async () => {
  const commentsList = await prisma.comments.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      Users: {
        select: { username: true },
      },
    },
  });

  

  return [...commentsList]
};

export default listCommentsService;
