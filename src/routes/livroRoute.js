import { Router } from "express";
import * as livroController from "../controllers/livroController.js";

const router = Router();

router.get("/", livroController.listarTodos)

export default router;