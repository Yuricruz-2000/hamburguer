import { Router } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController.js";

const routes = new Router();

routes.post("/", AvaliacaoController.create);
routes.get("/", AvaliacaoController.findAll);
routes.get("/:id", AvaliacaoController.findById);
routes.put("/:id", AvaliacaoController.update);
routes.delete("/:id", AvaliacaoController.delete);
routes.post("/restore/:id", AvaliacaoController.restaure);

export default routes;