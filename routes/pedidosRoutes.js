
import express from "express";
import { pedidosController } from "../controllers/pedidosController.js";

const router = express.Router();

router.get("/", pedidosController.getAll);
router.get("/:id", pedidosController.getOne);
router.post("/", pedidosController.create);
router.put("/:id", pedidosController.update);
router.delete("/:id", pedidosController.delete);

export default router;