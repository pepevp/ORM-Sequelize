
import { BaseController } from "../controllersBase/BaseController.js";
import { detalles_pedidoService } from "../services/detalles_pedidoService.js";

class Detalles_pedidoController extends BaseController {
    constructor() {
        super(detalles_pedidoService);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const detalles_pedidoController = new Detalles_pedidoController();