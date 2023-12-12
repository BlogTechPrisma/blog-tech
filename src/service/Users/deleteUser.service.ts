import AppError from "../../errors/app.error";
import { IUserById } from "../../interfaces/users";
import { prisma } from "../../utils/prisma";

const deleteUserService = async ({ id }: IUserById) => {
  const userExists = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });

  if (!userExists) {
    throw new AppError("User does not exists");
  }

  const deleteUser = await prisma.users.delete({
    where: {
      id: id,
    },
  });

  return deleteUser;
};

export default deleteUserService;
