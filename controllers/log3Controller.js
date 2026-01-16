
import { BaseController } from "../controllersBase/BaseController.js";
import { log3Service } from "../services/log3Service.js";

class Log3Controller extends BaseController {
    constructor() {
        super(log3Service);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const log3Controller = new Log3Controller();