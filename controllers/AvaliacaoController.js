import Avaliacao from "../models/Avaliacao.js";

export default class AvaliacaoController {
  static async store(req, res) {
    try {
      const { nota, pedidoId } = req.body;
        
      const novaAvaliacao = await Avaliacao.create({ nota, pedidoId });

      return res.status(201).json(novaAvaliacao);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao salvar avaliação", details: error.message });
    }
  }
}