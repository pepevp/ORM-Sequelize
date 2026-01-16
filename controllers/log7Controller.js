
import { BaseController } from "../controllersBase/BaseController.js";
import { log7Service } from "../services/log7Service.js";

class Log7Controller extends BaseController {
    constructor() {
        super(log7Service);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const log7Controller = new Log7Controller();