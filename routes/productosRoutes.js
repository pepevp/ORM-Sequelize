
import express from "express";
import { productosController } from "../controllers/productosController.js";

const router = express.Router();

router.get("/", productosController.getAll);
router.get("/:id", productosController.getOne);
router.post("/", productosController.create);
router.put("/:id", productosController.update);
router.delete("/:id", productosController.delete);

export default router;