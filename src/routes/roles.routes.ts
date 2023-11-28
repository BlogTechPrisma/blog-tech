import { Router } from "express";
import createRoleController from "../controller/role/createRoles.controller";

const router = Router();

router.post('', createRoleController)

export default router;