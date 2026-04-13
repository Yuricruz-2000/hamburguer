import { Router } from "express";

import PedidoController from "../controllers/PedidoController.js";

const routes = new Router();

routes.post("/", PedidoController.create);
routes.get("/", PedidoController.findAll);

export default routes;