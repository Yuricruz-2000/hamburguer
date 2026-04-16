'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('avaliacoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nota: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      pedidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pedidos', key: 'id' }, 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true } 
    });


    await queryInterface.addConstraint('avaliacoes', {
      fields: ['nota'],
      type: 'check',
      name: 'check_nota_range',
      where: {
        nota: {
          [Sequelize.Op.between]: [1, 5]
        }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('avaliacoes');
  }
};