import jwt from "jsonwebtoken";
import AppError from "../../errors/app.error";
import { prisma } from "../../utils/prisma";
import * as bcrypt from "bcrypt";
import { IUserLogin } from "../../interfaces/users";

const sessionLoginService = async ({ email, password }: IUserLogin) => {
  const user = await prisma.users.findUnique({
    where: { email },
    select: { password: true, id: true },
  });

  if (!user) {
    throw new AppError("Account does not exists", 403);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Incorrect e-mail or password");
  }

  const token = jwt.sign(
    { email: email, id: user.id },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
    }
  );

  return token
};

export default sessionLoginService;
