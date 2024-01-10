import AppError from "../../errors/app.error";
import { IRolesById } from "../../interfaces/roles";
import { prisma } from "../../utils/prisma";

const retrieveRoleService = async ({ id }: IRolesById) => {
  const findRoleById = await prisma.roles.findUnique({
    where: {
      id: id,
    },
  });

  if (!findRoleById) {
    throw new AppError(`Role does not exists`);
  }

  return { data: findRoleById };
};

export default retrieveRoleService;
