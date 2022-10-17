import { Router } from "express";
import { createSessionController } from "../controller/sessions.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
