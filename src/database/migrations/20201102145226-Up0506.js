'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('up0506', {
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
            turno: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            banco: {
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
            furo1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo3: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo4: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo5: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo6: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo7: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo8: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo9: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo10: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo11: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo12: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo13: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo14: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo15: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo16: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo17: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo18: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo19: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo20: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo21: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo22: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo23: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo24: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo25: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo26: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo27: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo28: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo29: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo30: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo31: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo32: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo33: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo34: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo35: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo36: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo37: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo38: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo39: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            furo40: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade3: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade4: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade5: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade6: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade7: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade8: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade9: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade10: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade11: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade12: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade13: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade14: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade15: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade16: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade17: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade18: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade19: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade20: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade21: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade22: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade23: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade24: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade25: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade26: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade27: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade28: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade29: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade30: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade31: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade32: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade33: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade34: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade35: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade36: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade37: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade38: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade39: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            profundidade40: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit1: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit2: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit3: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit4: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit5: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit6: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit7: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit8: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit9: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit10: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit11: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit12: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit13: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit14: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit15: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit16: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit17: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit18: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit19: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit20: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit21: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit22: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit23: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit24: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit25: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit26: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit27: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit28: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit29: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit30: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit31: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit32: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit33: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit34: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit35: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit36: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit37: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit38: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit39: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            bit40: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
	    somaprofundidade:{
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
            observacoes: {
                type: Sequelize.TEXT,
                allowNull: true,
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