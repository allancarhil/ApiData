const { Model, DataTypes } = require('sequelize');

class Ut07 extends Model {
    static init(sequelize) {
        super.init({
            nomeEquipamento:DataTypes.STRING,
            motorista: DataTypes.STRING,
            data: DataTypes.STRING,
            horaInicial: DataTypes.STRING,
            horaFinal: DataTypes.STRING,
            horimetroInicial: DataTypes.STRING,
            horimetroFinal: DataTypes.STRING,
            paradaInicial1: DataTypes.STRING,
            paradaFinal1: DataTypes.STRING,
            descricao1: DataTypes.STRING,
            paradaInicial2: DataTypes.STRING,
            paradaFinal2: DataTypes.STRING,
            descricao2: DataTypes.STRING,
            paradaInicial3: DataTypes.STRING,
            paradaFinal3: DataTypes.STRING,
            descricao3: DataTypes.STRING,
            paradaInicial4: DataTypes.STRING,
            paradaFinal4: DataTypes.STRING,
            descricao4: DataTypes.STRING,
            paradaInicial5: DataTypes.STRING,
            paradaFinal5: DataTypes.STRING,
            descricao5: DataTypes.STRING,
            paradaInicial6: DataTypes.STRING,
            paradaFinal6: DataTypes.STRING,
            descricao6: DataTypes.STRING,
            paradaInicial7: DataTypes.STRING,
            paradaFinal7: DataTypes.STRING,
            descricao7: DataTypes.STRING,
            paradaInicial8: DataTypes.STRING,
            paradaFinal8: DataTypes.STRING,
            descricao8: DataTypes.STRING,
            paradaInicial9: DataTypes.STRING,
            paradaFinal9: DataTypes.STRING,
            descricao9: DataTypes.STRING,
            paradaInicial10: DataTypes.STRING,
            paradaFinal10: DataTypes.STRING,
            descricao10: DataTypes.STRING,
            lanternagem: DataTypes.STRING,
            pneus: DataTypes.STRING,
            h2o: DataTypes.STRING,
            oleo: DataTypes.STRING,
            direcao: DataTypes.STRING,
            freios: DataTypes.STRING,
            parteEletrica: DataTypes.STRING,
            observacoes: DataTypes.STRING,
            condicaoPista: DataTypes.STRING,
            numViagens78078: DataTypes.STRING,
            numViagens78089: DataTypes.STRING,
            numViagens780910: DataTypes.STRING,
            numViagens7801011: DataTypes.STRING,
            numViagens7801112: DataTypes.STRING,
            numViagens7801213: DataTypes.STRING,
            numViagens7801314: DataTypes.STRING,
            numViagens7801415: DataTypes.STRING,
            numViagens7801516: DataTypes.STRING,
            numViagens7801617: DataTypes.STRING,
            numViagens7801718: DataTypes.STRING,
            obs78: DataTypes.STRING,
            obs89: DataTypes.STRING,
            obs910: DataTypes.STRING,
            obs1011: DataTypes.STRING,
            obs1112: DataTypes.STRING,
            obs1213: DataTypes.STRING,
            obs1314: DataTypes.STRING,
            obs1415: DataTypes.STRING,
            obs1516: DataTypes.STRING,
            obs1617: DataTypes.STRING,
            obs1718: DataTypes.STRING,
            numViagensAm: DataTypes.STRING,
            numViagensBicaCont: DataTypes.STRING,
            numViagensAf: DataTypes.STRING,
            numViagensPedrisco: DataTypes.STRING,
            numViagensBicaPr: DataTypes.STRING,
            numViagensBica790: DataTypes.STRING,
            numViagensBicaUm: DataTypes.STRING,
            numViagensBr1Pr: DataTypes.STRING,
            numViagensBr119: DataTypes.STRING,
            numViagensBr0Pr: DataTypes.STRING,
            numViagensBr0Um: DataTypes.STRING,
            numViagensBicaForro: DataTypes.STRING,
            numViagensB0: DataTypes.STRING,
            numViagensB1: DataTypes.STRING,
            numViagensB2: DataTypes.STRING,
            numViagensAim: DataTypes.STRING,
            numViagensFundo: DataTypes.STRING,
            numViagens780: DataTypes.STRING,
            numViagens790: DataTypes.STRING,
            numViagens800: DataTypes.STRING,
            numViagens810: DataTypes.STRING,
            soma780: DataTypes.STRING,
	    condicaoPistaObservacoes: DataTypes.STRING,

        },{
            sequelize
        })
    }
}

module.exports = Ut07;   

