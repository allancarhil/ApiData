'use strict';

module.exports = {
     up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('uc07', {
               id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
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
                b0_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b0_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b0_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b1_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b1_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b1_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b2_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b2_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b2_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b4_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b4_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                b4_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                aim_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                aim_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                aim_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                aif_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                aif_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                aif_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_vol: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_num_viagens: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_mot: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ampr_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ampr_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ampr_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ampr_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ampr_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                amum_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                amum_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                amum_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                amum_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                amum_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                af_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                af_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                af_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                af_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                af_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ped_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ped_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ped_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ped_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                ped_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_pr_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_pr_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_pr_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_pr_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_pr_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica790_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica790_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica790_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica790_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica790_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_um_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_um_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_um_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_um_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                bica_um_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br1_pr_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br1_pr_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br1_pr_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br1_pr_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br1_pr_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br119_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br119_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br119_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br119_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br119_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_pr_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_pr_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_pr_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_pr_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_pr_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_um_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_um_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_um_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_um_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                br0_um_obs: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                soma_toco: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                soma_truck: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                soma_carreta: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                soma_axor: {
                     type: Sequelize.TEXT,
                     allowNull: true,
                },
                obs_soma: {
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
