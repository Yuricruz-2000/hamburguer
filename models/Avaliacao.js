import { Model, DataTypes } from "sequelize";
import sequelize from "./Database.js";

export default class Avaliacao extends Model {
  static associate(models) {
    Avaliacao.belongsTo(models.Pedido, {
      foreignKey: 'pedidoId',
      as: 'pedido'
    });
  }
}

Avaliacao.init({
  nota: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
    validate: { min: 1, max: 5 } 
  },
  id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     allowNull: false 
    }
  
}, {
  sequelize,
  modelName: 'Avaliacao',
  tableName: 'avaliacoes',
  paranoid: true,
  timestamps: true
});