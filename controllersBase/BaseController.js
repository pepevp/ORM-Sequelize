// controllersBase/BaseController.js
export class BaseController {
    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
            const items = await this.service.findAll();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    getOne = async (req, res) => {
        try {
            const item = await this.service.findByPk(req.params.id);
            if (!item) return res.status(404).json({ message: "No encontrado" });
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    create = async (req, res) => {
        try {
            const nuevo = await this.service.create(req.body);
            res.status(201).json(nuevo);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    update = async (req, res) => {
        try {
            const actualizado = await this.service.update(req.params.id, req.body);
            res.json(actualizado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    delete = async (req, res) => {
        try {
            await this.service.delete(req.params.id);
            res.json({ message: "Eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
}