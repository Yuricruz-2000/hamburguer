import { Router } from "express";

import EntregaController from "../controllers/EntregaController.js";

const routes = new Router();

routes.get("/", EntregaController.index);
routes.get("/:id", EntregaController.show);
routes.post("/", EntregaController.store);
routes.put("/:id", EntregaController.update);
routes.delete("/:id", EntregaController.destroy);

export default routes;