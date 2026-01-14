
import { BaseController } from "../controllersBase/BaseController.js";
import { log5Service } from "../services/log5Service.js";

class Log5Controller extends BaseController {
    constructor() {
        super(log5Service);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const log5Controller = new Log5Controller();