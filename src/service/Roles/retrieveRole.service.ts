import { PrismaClient } from "@prisma/client";

import AppError from "../../errors/app.error";
const prisma = new PrismaClient();

const retrieveRoleService = async (roleName: string) => {
  const findRoleByName = await prisma.roles.findUnique({
    where: {
      name: roleName,
    },
  });
  console.log(roleName);
  if (!findRoleByName) {
    throw new AppError('Role ${roleName} does not exists')
  }

  return {data:findRoleByName};
};

export default retrieveRoleService;
