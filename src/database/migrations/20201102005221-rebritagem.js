'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('rebritagem', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nome_equipamento: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
              },
            motorista: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            data: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            updated_at: {
                type: Sequelize.DATE,
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