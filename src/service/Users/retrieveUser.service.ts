import AppError from "../../errors/app.error";
import { IUserRetrieve } from "../../interfaces/users";
import { prisma } from "../../utils/prisma";

const retrieveUserService = async ({ id }: IUserRetrieve) => {
  const userExists = await prisma.users.findFirst({
    where: {
      id: id,
    },
  });

  if (!userExists) {
    throw new AppError("This user does not exists");
  }

  return userExists;
};

export default retrieveUserService;
