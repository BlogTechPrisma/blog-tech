import AppError from "../../errors/app.error";
import { IUserUpdate } from "../../interfaces/users";
import { exclude, prisma } from "../../utils/prisma";
import * as bcrypt from "bcrypt";

const editUserService = async ({ id, fullName, password }: IUserUpdate) => {
  const userExists = prisma.users.findUnique({
    where: { id: id },
  });

  if (!userExists) {
    throw new AppError("This user does not exists", 400);
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const userData = prisma.users.update({
    where: { id: id },
    data: {
      full_name: fullName,
      password: hashedPass,
    },
  });

  return userData;
};

export default editUserService;
