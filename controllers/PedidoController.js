import Pedido from "../models/Pedido.js";

const PedidoController = {
    create : async (req, res) =>{
        try{
            const pedido = await Pedido.create(req.body);
            res.status(201).json(pedido);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
    try {
      const pedidos = await Pedido.findAll({

        include: [
          { association: 'entrega' }, 
          { association: 'avaliacao' } 
        ]
      });

      if (pedidos.length === 0) {
        return res.status(404).json({ message: "Não há pedidos" });
      }
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  findById: async (req, res) => {
    try {
      const pedido = await Pedido.findByPk(req.params.id, {
        include: [
          { association: 'entrega' },
          { association: 'avaliacao' }
        ]
      });

      if (pedido) {
        res.status(200).json(pedido);
      } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

};

export default PedidoController;