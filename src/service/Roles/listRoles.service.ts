import { PrismaClient } from "@prisma/client";
import { IListRoles } from "../../interfaces/roles";
const prisma = new PrismaClient();

const listRolesService = async () => {
  const rolesList = await prisma.roles.findMany({
    orderBy: {
      admin_privileges: "desc",
    },
  });

  return rolesList;
};

export default listRolesService;
