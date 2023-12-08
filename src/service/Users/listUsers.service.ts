import { exclude, prisma } from "../../utils/prisma";

const listUSersService = async () => {
  const usersList = await prisma.users.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      articles: true,
      comments: true,
      likes: true,
    }
  });

  const usersWithoutPassword = exclude(usersList, ['password'])

  return { data: usersWithoutPassword};
};

export default listUSersService;
