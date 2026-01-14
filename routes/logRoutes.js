
import express from "express";
import { logController } from "../controllers/logController.js";

const router = express.Router();

router.get("/", logController.getAll);
router.get("/:id", logController.getOne);
router.post("/", logController.create);
router.put("/:id", logController.update);
router.delete("/:id", logController.delete);

export default router;