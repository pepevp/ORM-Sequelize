
import express from "express";
import { clientesController } from "../controllers/clientesController.js";

const router = express.Router();

router.get("/", clientesController.getAll);
router.get("/:id", clientesController.getOne);
router.post("/", clientesController.create);
router.put("/:id", clientesController.update);
router.delete("/:id", clientesController.delete);

export default router;