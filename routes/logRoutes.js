import express from "express";
import {
crearLog,
obtenerLogs,
obtenerLog,
actualizarLog,
eliminarLog
} from "../controllers/logController.js";
const router = express.Router();
router.post("/", crearLog);
router.get("/", obtenerLogs);
router.get("/:id", obtenerLog);
router.put("/:id", actualizarLog);
router.delete("/:id", eliminarLog);
export default router;