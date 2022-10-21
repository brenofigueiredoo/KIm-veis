import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listCategoriesIdPropertiesController,
} from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdmUser.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createCategoriesController
);

categoriesRoutes.get("", listCategoriesController);

categoriesRoutes.get("/:id/properties", listCategoriesIdPropertiesController);

export default categoriesRoutes;
