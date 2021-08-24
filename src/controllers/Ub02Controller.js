const Ub02 = require('../models/Ub02');
const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req,res){
        const ub02 = await Ub02.findAll();

        return res.json(ub02);
            
    },
    async show(req, res){
        const { id }  = req.params;

        const ub02 = await Ub02.findByPk(id);

        return res.json(ub02);
    },

    async showData(req,res){
        const { data } = req.params;

        const where = {
            data : data
        };

        const ub02 = await Ub02.findAll({
            where
        });
    
        return res.json(ub02);   
    },

    async store(req,res){

     

        const { 
            nomeEquipamento,
            motorista,
            data,
            horaInicial,
            horaFinal,
            banco,
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
            pedraBritador,
            tremonha,
            balancaInicial,
            balancaFinal,
            bandeja,
            utc01,
            observacoes,
        } = req.body;

      

        const ub02 = await Ub02.create({
            nomeEquipamento,
            motorista,
            data,
            horaInicial,
            horaFinal,
            banco,
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
            pedraBritador,
            tremonha,
            balancaInicial,
            balancaFinal,
            bandeja,
            utc01,
            observacoes,
        });

        return res.json(ub02);
    }
}