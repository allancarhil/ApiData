'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('us06', {
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
          
            acude_interno: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            acude_restaurante: {
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
            lanternagem: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            pneus: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            h2o: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            oleo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            direcao: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            freios: {
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

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};