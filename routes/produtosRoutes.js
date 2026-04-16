import { Router } from "express";

import { criar, listar, obterPorId, atualizar, deletar } from "../controllers/ProdutoController.js";

const routes = new Router();

routes.post("/", criar);
routes.get("/", listar);
routes.get("/:id", obterPorId);
routes.put("/:id", atualizar);
routes.delete("/:id", deletar);

export default routes;