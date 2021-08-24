'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ub02', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_equipamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      motorista: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hora_inicial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hora_final: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      horimetro_inicial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      horimetro_final: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial4: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final4: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao4: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial5: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final5: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao5: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial6: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final6: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao6: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial7: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final7: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao7: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial8: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final8: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao8: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial9: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final9: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao9: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial10: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final10: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao10: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pedra_britador: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tremonha: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      balanca_inicial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      balanca_final: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bandeja: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      utc01: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
