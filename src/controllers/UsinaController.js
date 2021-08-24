const Usina = require('../models/Usina');
const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req, res) {
        const usina = await Usina.findAll();

        return res.json(usina);

    },

    async show(req, res) {
        const { id } = req.params;

        const usina = await Usina.findByPk(id);

        return res.json(usina);
    },

    async showData(req, res) {
        const { data } = req.params;

        const where = {
            data: data
        };

        const usina = await Usina.findAll({
            where
        });

        return res.json(usina);
    },

    async store(req, res) {



        const {
            nomeEquipamento,
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
            mot1,
            tf1,
            am1,
            b01,
            b11,
            mot1Soma,
            mot2,
            tf2,
            am2,
            b02,
            b12,
            mot2Soma,
            mot3,
            tf3,
            am3,
            b03,
            b13,
            mot3Soma,
            mot4,
            tf4,
            am4,
            b04,
            b14,
            mot4Soma,
            mot5,
            tf5,
            am5,
            b05,
            b15,
            mot5Soma,
            mot6,
            tf6,
            am6,
            b06,
            b16,
            mot6Soma,
            bandeja,
            rolo,
            rolete,
            alinha,
            egaiolada,
            observacoes
        } = req.body;


        const usina = await Usina.create({
            nomeEquipamento,
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
            mot1,
            tf1,
            am1,
            b01,
            b11,
            mot1Soma,
            mot2,
            tf2,
            am2,
            b02,
            b12,
            mot2Soma,
            mot3,
            tf3,
            am3,
            b03,
            b13,
            mot3Soma,
            mot4,
            tf4,
            am4,
            b04,
            b14,
            mot4Soma,
            mot5,
            tf5,
            am5,
            b05,
            b15,
            mot5Soma,
            mot6,
            tf6,
            am6,
            b06,
            b16,
            mot6Soma,
            bandeja,
            rolo,
            rolete,
            alinha,
            egaiolada,
            observacoes
        });

        return res.json(usina);
    }
}