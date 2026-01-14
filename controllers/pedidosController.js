
import { BaseController } from "../controllersBase/BaseController.js";
import { pedidosService } from "../services/pedidosService.js";

class PedidosController extends BaseController {
    constructor() {
        super(pedidosService);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const pedidosController = new PedidosController();