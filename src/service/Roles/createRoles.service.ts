import { Prisma, PrismaClient } from "@prisma/client";
import { ICreateRole } from "../../interfaces/roles";
import { error } from "console";
import AppError from "../../middleware/app.error.middleware";
export const prisma = new PrismaClient();

const createRoleService = async ({
  name,
  articles_creation,
  admin_privileges,
}: ICreateRole) => {
  console.log(name);
  const nameExists = await prisma.roles.findUnique({
    where: {
      name: name,
    },
  });

  if (nameExists) {
    throw new AppError("This hyerarchy already exists", 400);
  }

  const roleData = await prisma.roles.create({
    data: {
      name: name.toUpperCase(),
      articles_creation: articles_creation,
      admin_privileges: admin_privileges,
    },
  });
  return { ...roleData };
};

export default createRoleService;
