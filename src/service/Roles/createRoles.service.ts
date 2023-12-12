
import AppError from "../../errors/app.error";
import { IRoles } from "../../interfaces/roles";
import { prisma } from "../../utils/prisma";

const createRoleService = async ({
  name,
  articles_creation,
  admin_privileges,
}: IRoles) => {
  console.log(name);
  const nameExists = await prisma.roles.findUnique({
    where: {
      name: name,
    },
  });

  if (nameExists) {
    throw new AppError("test");
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
