import fs from "fs";
import path from "path";

const paths = {
    models: "./models",
    services: "./services",
    controllers: "./controllers",
    routes: "./routes"
};

// Crear carpetas si no existen
Object.values(paths).forEach(p => fs.mkdirSync(p, { recursive: true }));

const models = fs.readdirSync(paths.models)
    .filter(f => f.endsWith(".js") && f !== "init-models.js");

for (const modelFile of models) {
    const name = path.basename(modelFile, ".js"); // ej: productos
    const className = name.charAt(0).toUpperCase() + name.slice(1); // ej: Productos

    // ---------- 1. GENERAR SERVICIO ----------
    const serviceContent = `
import { sequelize } from "../config/db.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);
const Model = models.${name};

export const ${name}Service = {
    findAll: async () => await Model.findAll(),
    findByPk: async (id) => await Model.findByPk(id),
    create: async (data) => await Model.create(data),
    update: async (id, data) => {
        const item = await Model.findByPk(id);
        if (item) return await item.update(data);
        return null;
    },
    delete: async (id) => {
        const item = await Model.findByPk(id);
        if (item) return await item.destroy();
        return null;
    }
};`;
    fs.writeFileSync(`${paths.services}/${name}Service.js`, serviceContent);

    // ---------- 2. GENERAR CONTROLADOR (Herencia) ----------
    const controllerContent = `
import { BaseController } from "../controllersBase/BaseController.js";
import { ${name}Service } from "../services/${name}Service.js";

class ${className}Controller extends BaseController {
    constructor() {
        super(${name}Service);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const ${name}Controller = new ${className}Controller();`;
    fs.writeFileSync(`${paths.controllers}/${name}Controller.js`, controllerContent);

    // ---------- 3. GENERAR RUTA ----------
    const routeContent = `
import express from "express";
import { ${name}Controller } from "../controllers/${name}Controller.js";

const router = express.Router();

router.get("/", ${name}Controller.getAll);
router.get("/:id", ${name}Controller.getOne);
router.post("/", ${name}Controller.create);
router.put("/:id", ${name}Controller.update);
router.delete("/:id", ${name}Controller.delete);

export default router;`;
    fs.writeFileSync(`${paths.routes}/${name}Routes.js`, routeContent);

    console.log(`✅ Estructura MVC generada para: ${name}`);
}