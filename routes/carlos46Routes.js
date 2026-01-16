
import express from "express";
import { carlos46Controller } from "../controllers/carlos46Controller.js";

const router = express.Router();

router.get("/", carlos46Controller.getAll);
router.get("/:id", carlos46Controller.getOne);
router.post("/", carlos46Controller.create);
router.put("/:id", carlos46Controller.update);
router.delete("/:id", carlos46Controller.delete);

export default router;