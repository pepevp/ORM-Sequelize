
import { BaseController } from "../controllersBase/BaseController.js";
import { logService } from "../services/logService.js";

class LogController extends BaseController {
    constructor() {
        super(logService);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const logController = new LogController();