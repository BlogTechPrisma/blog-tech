import AppError from "../../errors/app.error";
import { IRoles } from "../../interfaces/roles";
import { prisma } from "../../utils/prisma";

const editRoleService = async ({
  id,
  name,
  admin_privileges,
  articles_creation,
}: IRoles) => {
  const roleExists = await prisma.roles.findUnique({
    where: {
      id: id,
    },
  });

  if(!roleExists) {
    throw new AppError("oi")
  }

  const roleData = await prisma.roles.update({
    where: { id: id },
    data: {
      name: name.toUpperCase(),
      admin_privileges: admin_privileges,
      articles_creation: articles_creation,
    },
  });

  return roleData;
};

export default editRoleService;
