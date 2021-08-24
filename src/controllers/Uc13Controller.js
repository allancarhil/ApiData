const Uc13 = require('../models/Uc13');
const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req,res){
        const uc13 = await Uc13.findAll();

        return res.json(uc13);
            
    },
    async show(req, res){
        const { id }  = req.params;

        const uc13 = await Uc13.findByPk(id);

        return res.json(uc13);
    },

    async showData(req,res){
        const { data } = req.params;

        const where = {
            data : data
        };

        const uc13 = await Uc13.findAll({
            where
        });
    
        return res.json(uc13);   
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

       
        const uc13 = await Uc13.create({
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
            lanternagem,
            h2o,
            oleo,
            hidraulico,
            observacoes,
        });

        return res.json(uc13);
    }
}