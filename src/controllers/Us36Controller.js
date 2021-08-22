const Us36 = require('../models/Us36');
const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req, res) {

        try {

            const us36 = await Us36.findAll();

            return res.json(us36);
        } catch (error) {
            return res.json("Erro! " + error);
        }

    },
    async show(req, res) {
        const { id } = req.params;

        const us36 = await Us36.findByPk(id);

        return res.json(us36);
    },

    async showData(req, res) {
        const { data } = req.params;

        const where = {
            data: data
        };

        const us36 = await Us36.findAll({
            where
        });

        return res.json(us36);
    },

    async store(req, res) {



        const {
            motorista,
            data,
            horaInicial,
            horaFinal,
            kmInicial,
            kmFinal,
            servicos,
            observacoes,
            lanternagem,
            pneus
        } = req.body;



        const us36 = await Us36.create({
            motorista,
            data,
            horaInicial,
            horaFinal,
            kmInicial,
            kmFinal,
            servicos,
            observacoes,
            lanternagem,
            pneus,
        });

        return res.json(us36);
    }
}