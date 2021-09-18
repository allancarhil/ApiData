const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const database = new Sequelize(dbConfig);
const { QueryTypes } = require('sequelize');


module.exports = {
    async showResumo(req, res) {

        try {
            const { data } = req.params;

            const up0506 = await database.query("select nome_equipamento, data, somaprofundidade from up0506 where data = " + data, { type: QueryTypes.SELECT });
            const ut07 = await database.query("select nome_equipamento, data, num_viagens78078,num_viagens78089,num_viagens780910,num_viagens7801011,num_viagens7801112,num_viagens7801213,num_viagens7801314,num_viagens7801415,num_viagens7801516,num_viagens7801617,num_viagens7801718,num_viagens_am,num_viagens_bica_cont,num_viagens_af,num_viagens_pedrisco,num_viagens_bica_pr,num_viagens_bica790,num_viagens_bica_um,num_viagens_br1_pr,num_viagens_br119,num_viagens_br0_pr,num_viagens_br0_um,num_viagens_bica_forro,num_viagens_b0,num_viagens_b1,num_viagens_b2,num_viagens_aim,num_viagens_fundo,num_viagens780,num_viagens790,num_viagens800,num_viagens810,soma780 from ut07 where data = " + data, { type: QueryTypes.SELECT });
            const ut08 = await database.query("select nome_equipamento, data, num_viagens78078,num_viagens78089,num_viagens780910,num_viagens7801011,num_viagens7801112,num_viagens7801213,num_viagens7801314,num_viagens7801415,num_viagens7801516,num_viagens7801617,num_viagens7801718,num_viagens_am,num_viagens_bica_cont,num_viagens_af,num_viagens_pedrisco,num_viagens_bica_pr,num_viagens_bica790,num_viagens_bica_um,num_viagens_br1_pr,num_viagens_br119,num_viagens_br0_pr,num_viagens_br0_um,num_viagens_bica_forro,num_viagens_b0,num_viagens_b1,num_viagens_b2,num_viagens_aim,num_viagens_fundo,num_viagens780,num_viagens790,num_viagens800,num_viagens810,soma780 from ut08 where data = " + data, { type: QueryTypes.SELECT });
            const ut37 = await database.query("select nome_equipamento, data, num_viagens78078,num_viagens78089,num_viagens780910,num_viagens7801011,num_viagens7801112,num_viagens7801213,num_viagens7801314,num_viagens7801415,num_viagens7801516,num_viagens7801617,num_viagens7801718,num_viagens_am,num_viagens_bica_cont,num_viagens_af,num_viagens_pedrisco,num_viagens_bica_pr,num_viagens_bica790,num_viagens_bica_um,num_viagens_br1_pr,num_viagens_br119,num_viagens_br0_pr,num_viagens_br0_um,num_viagens_bica_forro,num_viagens_b0,num_viagens_b1,num_viagens_b2,num_viagens_aim,num_viagens_fundo,num_viagens780,num_viagens790,num_viagens800,num_viagens810,soma780 from ut37 where data = " + data, { type: QueryTypes.SELECT });

            const datas = [
                up0506,
                ut07,
                ut08,
                ut37
            ];

            return res.json(datas);
        } catch (error) {
            return res.json({
                erro: "error!" + error
            })
        }
    },
}