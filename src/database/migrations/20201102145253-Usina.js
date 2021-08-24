'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usina', {
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
      data:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      hora_inicial:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      hora_final:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      horimetro_inicial:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      horimetro_final:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial1:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final1:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao1:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial2:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final2:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao2:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial3:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final3:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao3:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial4:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final4:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao4:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial5:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final5:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao5:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial6:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_final6:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao6:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      parada_inicial7: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_final7: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      descricao7: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_inicial8: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_final8: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      descricao8: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_inicial9: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_final9: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      descricao9: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_inicial10: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      parada_final10: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      descricao10: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tf1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      am1: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b01: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b11: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot1_soma: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tf2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      am2: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b02: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b12: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot2_soma: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot3: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tf3: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      am3: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b03: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b13: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot3_soma: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot4: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tf4: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      am4: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b04: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b14: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot4_soma: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot5: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tf5: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      am5: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b05: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b15: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot5_soma: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot6: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      tf6: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      am6: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b06: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      b16: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      mot6_soma: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      bandeja: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rolo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      rolete: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      alinha: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      egaiolada: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      observacoes: {
        type: Sequelize.TEXT,
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
