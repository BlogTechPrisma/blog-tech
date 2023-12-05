import { PrismaClient } from "@prisma/client";
import { ICreateRole } from "../../interfaces/roles";
import AppError from "../../errors/app.error";
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
    throw new AppError("This role already exists");
  }

  const roleData = await prisma.roles.create({
    data: {
      name: name.toUpperCase(),
      articles_creation: articles_creation,
      admin_privileges: admin_privileges,
    },
  });
  return { data: roleData };
};

export default createRoleService;
