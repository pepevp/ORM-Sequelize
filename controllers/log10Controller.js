
import { BaseController } from "../controllersBase/BaseController.js";
import { log10Service } from "../services/log10Service.js";

class Log10Controller extends BaseController {
    constructor() {
        super(log10Service);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const log10Controller = new Log10Controller();