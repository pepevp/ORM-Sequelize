
import { BaseController } from "../controllersBase/BaseController.js";
import { carlos46Service } from "../services/carlos46Service.js";

class Carlos46Controller extends BaseController {
    constructor() {
        super(carlos46Service);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const carlos46Controller = new Carlos46Controller();