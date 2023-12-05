import { Router } from "express";
import createRoleController from "../controller/role/createRoles.controller";
import listRolesController from "../controller/role/listRoles.controller";
import retrieveRoleController from "../controller/role/retrieveRole.controller";
import deleteRoleController from "../controller/role/deleteRoleController";

const router = Router();

router.post("", createRoleController);
router.get("", listRolesController);
router.get("/:roleName", retrieveRoleController);
router.delete("/:name", deleteRoleController)

export default router;
