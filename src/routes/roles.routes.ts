import { Router } from "express";
import createRoleController from "../controller/Roles/createRoles.controller";
import listRolesController from "../controller/Roles/listRoles.controller";
import retrieveRoleController from "../controller/Roles/retrieveRole.controller";
import deleteRoleController from "../controller/Roles/deleteRoleController";
import editRoleController from "../controller/Roles/editRole.controller";

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
