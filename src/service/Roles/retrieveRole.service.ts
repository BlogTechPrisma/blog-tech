import { PrismaClient } from "@prisma/client";
import AppError from "../../middleware/app.error.middleware";
const prisma = new PrismaClient();

const retrieveRoleService = async (roleName: string) => {
  const findRoleByName = await prisma.roles.findUnique({
    where: {
      name: roleName,
    },
  });
  console.log(roleName, "serviceeeeeeeeeeeeeeeeeeee");
  if (!findRoleByName) {
    throw new AppError("This role does not exists");
  }
  console.log(findRoleByName);
  return findRoleByName;
};

export default retrieveRoleService;
