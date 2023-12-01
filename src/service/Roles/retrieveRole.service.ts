import { PrismaClient } from "@prisma/client";
import AppError from "../../errors/app.error";
const prisma = new PrismaClient();

const retrieveRoleService = async (roleName: string) => {
  const findRoleByName = await prisma.roles.findUnique({
    where: {
      name: roleName,
    },
  });
  console.log(roleName, "serviceeeeeeeeeeeeeeeeeeee");
  if (!findRoleByName) {
    throw new AppError(`Rolename ${roleName} does not exists`)}

  console.log(findRoleByName);
  return {data:findRoleByName};
};

export default retrieveRoleService;
