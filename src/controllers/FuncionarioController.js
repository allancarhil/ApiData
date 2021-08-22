const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req,res){
        const funcionario = await Funcionario.findAll({
        });

        return res.json(funcionario);
            
    },

    async show(req, res){
        const { id }  = req.params;

        const funcionario = await Funcionario.findByPk(id);

        return res.json(funcionario);
    },
    

    async store(req,res){
        const { 
            nome,
            cpf,
            dataNasc,
            telefone,
            matricula,
            endereco,
            senha,
        } = req.body;

        const funcionario = await Funcionario.create({
            nome,
            cpf,
            dataNasc,
            telefone,
            matricula,
            endereco,
            senha,
        });

        return res.json(funcionario);
    }
}