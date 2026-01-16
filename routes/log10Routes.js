
import express from "express";
import { log10Controller } from "../controllers/log10Controller.js";

const router = express.Router();

router.get("/", log10Controller.getAll);
router.get("/:id", log10Controller.getOne);
router.post("/", log10Controller.create);
router.put("/:id", log10Controller.update);
router.delete("/:id", log10Controller.delete);

export default router;