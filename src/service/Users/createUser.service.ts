import AppError from "../../errors/app.error";
import { IUserCreate } from "../../interfaces/users";
import { prisma } from "../../utils/prisma";
import * as bcrypt from "bcrypt";

const createUserService = async ({
  email,
  fullName,
  username,
  password,
}: IUserCreate) => {
  const userExists = await prisma.users.findUnique({
    where: {
      username: username,
    },
  });
  
  console.log(username, "chegou aqui poarr", password)

  if (userExists) {
    throw new AppError("Username already exists");
  }

  const hashedPass = await bcrypt.hash(password, 10)
  const userData = await prisma.users.create({
    data: {
      email: email,
      full_name: fullName,
      password: hashedPass,
      username: username,
    },
  });
  return userData;
};

export default createUserService;
