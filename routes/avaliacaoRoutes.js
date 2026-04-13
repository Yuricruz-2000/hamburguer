import { Router } from "express";
import AvaliacaoController from "./controllers/AvaliacaoController.js";

const routes = Router();

routes.post("/avaliacoes", AvaliacaoController.store);

export default routes;