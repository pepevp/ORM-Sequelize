
import express from "express";
import { categoriasController } from "../controllers/categoriasController.js";

const router = express.Router();

router.get("/", categoriasController.getAll);
router.get("/:id", categoriasController.getOne);
router.post("/", categoriasController.create);
router.put("/:id", categoriasController.update);
router.delete("/:id", categoriasController.delete);

export default router;