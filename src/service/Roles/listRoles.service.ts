import { prisma } from "../../utils/prisma";

const listRolesService = async () => {
  const rolesList = await prisma.roles.findMany({
    orderBy: {
      admin_privileges: "desc",
    },
  });

  return {data:rolesList};
};

export default listRolesService;
