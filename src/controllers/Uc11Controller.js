const Uc11 = require('../models/Uc11');
module.exports = {

    async index(req, res) {
        const uc11 = await Uc11.findAll();

        return res.json(uc11);

    },
    async show(req, res) {
        const { id } = req.params;

        const uc11 = await Uc11.findByPk(id);

        return res.json(uc11);
    },

    async showData(req, res) {
        const { data } = req.params;

        const where = {
            data: data
        };

        const uc11 = await Uc11.findAll({
            where
        });

        return res.json(uc11);
    },

    async store(req, res) {
        const {
            motorista,
            data,
            horaInicial,
            horaFinal,
            horimetroInicial,
            horimetroFinal,
            paradaInicial1,
            paradaFinal1,
            descricao1,
            paradaInicial2,
            paradaFinal2,
            descricao2,
            paradaInicial3,
            paradaFinal3,
            descricao3,
            paradaInicial4,
            paradaFinal4,
            descricao4,
            paradaInicial5,
            paradaFinal5,
            descricao5,
            paradaInicial6,
            paradaFinal6,
            descricao6,
            paradaInicial7,
            paradaFinal7,
            descricao7,
            paradaInicial8,
            paradaFinal8,
            descricao8,
            paradaInicial9,
            paradaFinal9,
            descricao9,
            paradaInicial10,
            paradaFinal10,
            descricao10,
            lanternagem,
            h2o,
            oleo,
            hidraulico,
            observacoes,
        } = req.body;


        const uc11 = await Uc11.create({
            motorista,
            data,
            horaInicial,
            horaFinal,
            horimetroInicial,
            horimetroFinal,
            paradaInicial1,
            paradaFinal1,
            descricao1,
            paradaInicial2,
            paradaFinal2,
            descricao2,
            paradaInicial3,
            paradaFinal3,
            descricao3,
            paradaInicial4,
            paradaFinal4,
            descricao4,
            paradaInicial5,
            paradaFinal5,
            descricao5,
            paradaInicial6,
            paradaFinal6,
            descricao6,
            paradaInicial7,
            paradaFinal7,
            descricao7,
            paradaInicial8,
            paradaFinal8,
            descricao8,
            paradaInicial9,
            paradaFinal9,
            descricao9,
            paradaInicial10,
            paradaFinal10,
            descricao10,
            lanternagem,
            h2o,
            oleo,
            hidraulico,
            observacoes,
        });

        return res.json(uc11);
    }
}