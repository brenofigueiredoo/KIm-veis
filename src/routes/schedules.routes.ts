import { Router } from "express";
import {
  createSchedulesController,
  listSchedulesPropertiesIdController,
} from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdmUser.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createSchedulesController);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listSchedulesPropertiesIdController
);

export default schedulesRoutes;
