'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('us36', {
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
      km_inicial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      km_final: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      servicos: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lanternagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pneus: {
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
