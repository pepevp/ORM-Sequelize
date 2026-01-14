
import express from "express";
import { detalles_pedidoController } from "../controllers/detalles_pedidoController.js";

const router = express.Router();

router.get("/", detalles_pedidoController.getAll);
router.get("/:id", detalles_pedidoController.getOne);
router.post("/", detalles_pedidoController.create);
router.put("/:id", detalles_pedidoController.update);
router.delete("/:id", detalles_pedidoController.delete);

export default router;