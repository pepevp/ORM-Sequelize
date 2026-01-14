
import { BaseController } from "../controllersBase/BaseController.js";
import { categoriasService } from "../services/categoriasService.js";

class CategoriasController extends BaseController {
    constructor() {
        super(categoriasService);
    }
    // Aquí puedes añadir métodos personalizados más adelante
}

export const categoriasController = new CategoriasController();