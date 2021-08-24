'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('uc11', {
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
                type: Sequelize.TEXT,
                allowNull: true,
            },
            data: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            hora_inicial: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            hora_final: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            horimetro_inicial: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            horimetro_final: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_inicial1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_final1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            descricao1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_inicial2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_final2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            descricao2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_inicial3: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_final3: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            descricao3: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_inicial4: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_final4: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            descricao4: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_inicial5: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_final5: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            descricao5: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_inicial6: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            parada_final6: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            descricao6: {
                type: Sequelize.TEXT,
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
            h2o: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            oleo: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            hidraulico: {
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

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};