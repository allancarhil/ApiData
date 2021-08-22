const Us06 = require('../models/Us06');
const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req, res) {
        const us06 = await Us06.findAll();

        return res.json(us06);

    },
    async show(req, res) {
        const { id } = req.params;

        const us06 = await Us06.findByPk(id);

        return res.json(us06);
    },

    async showData(req, res) {
        const { data } = req.params;

        const where = {
            data: data
        };

        const us06 = await Us06.findAll({
            where
        });

        return res.json(us06);
    },

    async store(req, res) {

        const {
            motorista,
            data,
            horaInicial,
            horaFinal,
            horimetroInicial,
            horimetroFinal,
            acudeInterno,
            acudeRestaurante,
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
            lanternagem,
            pneus,
            h2o,
            oleo,
            direcao,
            freios,
            observacoes,
        } = req.body;


        const us06 = await Us06.create({
            motorista,
            data,
            horaInicial,
            horaFinal,
            horimetroInicial,
            horimetroFinal,
            acudeInterno,
            acudeRestaurante,
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
            lanternagem,
            pneus,
            h2o,
            oleo,
            direcao,
            freios,
            observacoes,
        });

        return res.json(us06);
    }
}