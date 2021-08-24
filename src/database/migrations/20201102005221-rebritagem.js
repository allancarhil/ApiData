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
            hora_inicial: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            hora_final: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_inicial_ua02: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_final_ua02: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_inicial_ua03: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_final_ua03: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_inicial_ua04: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_final_ua04: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_inicial_s3000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_final_s3000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_inicial_h4000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_final_h4000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_inicial_remco: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            horimetro_final_remco: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            balanca_utc04: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            balanca_utc05: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            temp_cartucho_remco: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            temp_motor_remco: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            vibra_remco: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            pressao_s3000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            pressao_h4000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            amperimetros: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial1_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final1_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento1_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao1_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial2_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final2_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento2_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao2_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial3_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final3_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento3_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao3_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial4_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final4_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento4_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao4_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial5_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final5_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento5_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao5_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial6_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final6_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento6_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao6_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial7_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final7_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento7_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao7_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial8_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final8_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento8_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao8_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial9_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final9_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento9_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao9_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial10_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final10_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento10_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao10_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial11_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final11_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento11_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao11_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial12_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final12_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento12_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao12_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial13_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final13_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento13_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao13_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial14_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final14_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento14_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao14_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial15_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final15_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento15_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao15_cr1: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },

            parada_inicial1_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final1_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento1_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao1_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial2_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final2_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento2_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao2_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial3_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final3_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento3_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao3_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial4_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final4_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento4_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao4_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial5_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final5_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento5_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao5_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial6_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final6_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento6_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao6_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial7_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final7_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento7_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao7_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial8_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final8_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento8_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao8_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial9_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final9_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento9_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao9_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial10_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final10_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento10_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao10_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial11_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final11_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento11_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao11_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial12_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final12_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento12_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao12_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial13_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final13_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento13_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao13_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial14_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final14_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento14_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao14_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial15_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final15_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento15_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao15_cr2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },

            parada_inicial1_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final1_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento1_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao1_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial2_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final2_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento2_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao2_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial3_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final3_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento3_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao3_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial4_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final4_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento4_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao4_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial5_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final5_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento5_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao5_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial6_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final6_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento6_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao6_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial7_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final7_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento7_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao7_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial8_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final8_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento8_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao8_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial9_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final9_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento9_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao9_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial10_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final10_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento10_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao10_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial11_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final11_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento11_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao11_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial12_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final12_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento12_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao12_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial13_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final13_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento13_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao13_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial14_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final14_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento14_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao14_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_inicial15_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            parada_final15_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            equipamento15_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            descricao15_cr3: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            metal_utc11: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            metal_utc09: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            metal_utc02: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            engal_ua02: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            engal_ur01: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            engal_ur02: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            oleo_s3000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            oleo_h4000: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            bandejas: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            rolos: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            skides: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            inicial_rachao: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            inicial_b4: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            inicial_b2: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_bica_porcent: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_bica_horario: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_b0_porcent: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_b0_horario: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_b1_porcent: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_b1_horario: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_pedrisco_porcent: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            retorno_pedrisco_horario: {
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
            observacoes: {
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