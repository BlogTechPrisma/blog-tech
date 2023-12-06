import { Router } from "express";
import createRoleController from "../controller/role/createRoles.controller";
import listRolesController from "../controller/role/listRoles.controller";
import retrieveRoleController from "../controller/role/retrieveRole.controller";
import deleteRoleController from "../controller/role/deleteRoleController";
import editRoleController from "../controller/role/editRole.controller";

const router = Router();
export const rolesRoutes = () => {
  router.post("", createRoleController);
  router.patch("/:id", editRoleController)
  router.get("", listRolesController);
  router.get("/:id", retrieveRoleController);
  router.delete("/:id", deleteRoleController);

  return router
};

export default router;
