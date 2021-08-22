const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const database = new Sequelize(dbConfig);
const { QueryTypes } = require('sequelize');


module.exports = {
    async showData(req, res) {

        try {
            const { data } = req.params;

            //const rebritagem = await database.query("select * from rebritagem where data = " + data, { type: QueryTypes.SELECT });
            const ub02 = await database.query("select * from ub02 where data = " + data, { type: QueryTypes.SELECT });
            const uc06 = await database.query("select * from uc06 where data = " + data, { type: QueryTypes.SELECT });
            const uc07 = await database.query("select * from uc07 where data = " + data, { type: QueryTypes.SELECT });
            const uc11 = await database.query("select * from uc11 where data = " + data, { type: QueryTypes.SELECT });
            const uc13 = await database.query("select * from uc13 where data = " + data, { type: QueryTypes.SELECT });
            const uc14 = await database.query("select * from uc14 where data = " + data, { type: QueryTypes.SELECT });
            const up0506 = await database.query("select * from up0506 where data = " + data, { type: QueryTypes.SELECT });
            const us06 = await database.query("select * from us06 where data = " + data, { type: QueryTypes.SELECT });
            const usina = await database.query("select * from usina where data = " + data, { type: QueryTypes.SELECT });
            const ut07 = await database.query("select * from ut07 where data = " + data, { type: QueryTypes.SELECT });
            const ut08 = await database.query("select * from ut08 where data = " + data, { type: QueryTypes.SELECT });
            const mn01 = await database.query("select * from mn01 where data = " + data, { type: QueryTypes.SELECT });
            const us36 = await database.query("select * from us36 where data = " + data, { type: QueryTypes.SELECT });
            const ut37 = await database.query("select * from ut37 where data = " + data, { type: QueryTypes.SELECT });


            const datas = {
                //rebritagem,
                ub02,
                uc06,
                uc07,
                uc11,
                uc13,
                uc14,
                up0506,
                us06,
                usina,
                ut07,
                ut08,
                mn01,
                us36,
                ut37
            };

            return res.json(datas);
        } catch (error) {
            return res.json({
                erro: "error!" + error
            })
        }
    },
}