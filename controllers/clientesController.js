
import { BaseController } from "../controllersBase/BaseController.js";
import { clientesService } from "../services/clientesService.js";

class ClientesController extends BaseController {
    constructor() {
        super(clientesService);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const clientesController = new ClientesController();