const Ut07 = require('../models/Ut07');
const Funcionario = require('../models/Funcionario');
module.exports = {

    async index(req,res){
        const ut07 = await Ut07.findAll();

        return res.json(ut07);
            
    },
    async show(req, res){
        const { id }  = req.params;

        const ut07 = await Ut07.findByPk(id);

        return res.json(ut07);
    },

   async showData(req, res) {
        const { data } = req.params;

        const where = {
            data: data
        };

        const ut07 = await Ut07.findAll({
            where
        });

        return res.json(ut07);
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
            pneus,
            h2o,
            oleo,
            direcao,
            freios,
            parteEletrica,
            observacoes,
            condicaoPista,
            numViagens78078,
            numViagens78089,
            numViagens780910,
            numViagens7801011,
            numViagens7801112,
            numViagens7801213,
            numViagens7801314,
            numViagens7801415,
            numViagens7801516,
            numViagens7801617,
            numViagens7801718,
            obs78,
	    obs89,
	    obs910,
	    obs1011,
	    obs1112,
	    obs1213,
	    obs1314,
	    obs1415,
	    obs1516,
	    obs1617,
	    obs1718,
            numViagensAm,
            numViagensBicaCont,
            numViagensAf,
            numViagensPedrisco,
            numViagensBicaPr,
            numViagensBica790,
            numViagensBicaUm,
            numViagensBr1Pr,
            numViagensBr119,
            numViagensBr0Pr,
            numViagensBr0Um,
            numViagensBicaForro,
            numViagensB0,
            numViagensB1,
            numViagensB2,
            numViagensAim,
            numViagensFundo,
            numViagens780,
            numViagens790,
            numViagens800,
            numViagens810,
            soma780,
            condicaoPistaObservacoes,
        } = req.body;

   

        const ut07 = await Ut07.create({
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
            pneus,
            h2o,
            oleo,
            direcao,
            freios,
            parteEletrica,
            observacoes,
            condicaoPista,
            numViagens78078,
            numViagens78089,
            numViagens780910,
            numViagens7801011,
            numViagens7801112,
            numViagens7801213,
            numViagens7801314,
            numViagens7801415,
            numViagens7801516,
            numViagens7801617,
            numViagens7801718,
            obs78,
	    obs89,
	    obs910,
	    obs1011,
	    obs1112,
	    obs1213,
	    obs1314,
	    obs1415,
	    obs1516,
	    obs1617,
	    obs1718,
            numViagensAm,
            numViagensBicaCont,
            numViagensAf,
            numViagensPedrisco,
            numViagensBicaPr,
            numViagensBica790,
            numViagensBicaUm,
            numViagensBr1Pr,
            numViagensBr119,
            numViagensBr0Pr,
            numViagensBr0Um,
            numViagensBicaForro,
            numViagensB0,
            numViagensB1,
            numViagensB2,
            numViagensAim,
            numViagensFundo,
            numViagens780,
            numViagens790,
            numViagens800,
            numViagens810,
            soma780,
            condicaoPistaObservacoes,
        });

        return res.json(ut07);
    }
}