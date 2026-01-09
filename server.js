import express from "express";
import initModels from "./models/init-models.js";
import productoRoutes from "./routes/productosRoutes.js";
import { sequelize } from "./config/db.js";
const models = initModels(sequelize);
const app = express();
app.use(express.json());
// Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/log", logRoutes);
// Sincronizar base de datos
(async () => {
try {
await sequelize.sync({ alter: true });
console.log("✅ Tablas sincronizadas.");
} catch (error) {
console.error("❌ Error al sincronizar las tablas:", error);
}
})();
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));