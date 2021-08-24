const Funcionario = require('../models/Funcionario');
const Mn01 = require('../models/Mn01');
module.exports = {

    async index(req,res){
        const mn01 = await Mn01.findAll();

        return res.json(mn01);
            
    },

    async show(req,res){
        const { id } = req.params;

        const mn01 = await Mn01.findByPk(id);
    

        return res.json(mn01);
            
    },


    async showData(req,res){
        const { data } = req.params;

        const where = {
            data : data
        };

        const mn01 = await Mn01.findAll({
            where
        });
    
        return res.json(mn01);   
    },


    async store(req,res){
        const { 
            nomeEquipamento,
            motorista,
            data,
            horaInicial,
            horaFinal,
            horimetroInicial,
            horimetroFinal,
            banco,
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
            observacoes
        } = req.body;

        const mn01 = await Mn01.create({
            nomeEquipamento,
            motorista,
            data,
            horaInicial,
            horaFinal,
            horimetroInicial,
            horimetroFinal,
            banco,
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
            observacoes
        });

        return res.json(mn01);
    }
}

