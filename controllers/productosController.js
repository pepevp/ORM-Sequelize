
import { BaseController } from "../controllersBase/BaseController.js";
import { productosService } from "../services/productosService.js";

class ProductosController extends BaseController {
    constructor() {
        super(productosService);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const productosController = new ProductosController();