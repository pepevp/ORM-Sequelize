
import { sequelize } from "../config/db.js";
import initModels from "../models/init-models.js";
const models = initModels(sequelize);
const Model = models.log3;

export const log3Service = {
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
};