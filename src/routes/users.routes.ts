import { Router } from "express";
import {
  createUserController,
  listUsersController,
  updateUserController,
} from "../controller/users.controllers";
import ensureAuthMiddleware from "../middleware/ensureAuth.middleware";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("", ensureAuthMiddleware, listUsersController);
usersRoutes.patch("", ensureAuthMiddleware, updateUserController);

export default usersRoutes;
