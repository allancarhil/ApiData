'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ut37', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
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
            lanternagem: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            pneus: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            h2o: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            oleo: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            direcao: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            freios: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parte_eletrica: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            observacoes: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            condicao_pista: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens78078: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens78089: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens780910: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801011: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801112: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801213: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801314: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801415: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801516: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801617: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens7801718: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
           
	   obs78: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs89: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs910: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1011: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1112: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1213: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1314: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1415: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1516: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1617: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
 	  obs1718: {
                type: Sequelize.TEXT,
                allowNull: true,
            },

            num_viagens_am: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_bica_cont: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_af: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_pedrisco: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_bica_pr: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_bica790: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_bica_um: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_br1_pr: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_br119: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_br0_pr: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_br0_um: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_bica_forro: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_b0: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_b1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_b2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_aim: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens_fundo: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens780: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens790: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens800: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            num_viagens810: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            soma780: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            condicao_pista_observacoes: {
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
