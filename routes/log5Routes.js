
import express from "express";
import { log5Controller } from "../controllers/log5Controller.js";

const router = express.Router();

router.get("/", log5Controller.getAll);
router.get("/:id", log5Controller.getOne);
router.post("/", log5Controller.create);
router.put("/:id", log5Controller.update);
router.delete("/:id", log5Controller.delete);

export default router;