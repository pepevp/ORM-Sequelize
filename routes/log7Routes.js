
import express from "express";
import { log7Controller } from "../controllers/log7Controller.js";

const router = express.Router();

router.get("/", log7Controller.getAll);
router.get("/:id", log7Controller.getOne);
router.post("/", log7Controller.create);
router.put("/:id", log7Controller.update);
router.delete("/:id", log7Controller.delete);

export default router;