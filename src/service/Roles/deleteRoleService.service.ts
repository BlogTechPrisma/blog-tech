import { PrismaClient } from "@prisma/client";
import { ICreateRole } from "../../interfaces/roles";
import AppError from "../../middleware/app.error.middleware";
const prisma = new PrismaClient();
const deleteRoleService = async (roleName: string) => {
    const findRoleByName = await prisma.roles.findUnique({
        where: {
          name: roleName,
        },
      });
  if (!findRoleByName) {
    throw new AppError("This hyerarchy does not exists");
  }

  const roleDelete = await prisma.roles.delete({
    where: {
      name: roleName,
    },
  });

  return roleDelete;
};

export default deleteRoleService;
