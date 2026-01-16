
import express from "express";
import { log3Controller } from "../controllers/log3Controller.js";

const router = express.Router();

router.get("/", log3Controller.getAll);
router.get("/:id", log3Controller.getOne);
router.post("/", log3Controller.create);
router.put("/:id", log3Controller.update);
router.delete("/:id", log3Controller.delete);

export default router;