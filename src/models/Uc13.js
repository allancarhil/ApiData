const { Model, DataTypes } = require('sequelize');

class Uc13 extends Model {
    static init(sequelize) {
        super.init({   
            nomeEquipamento:DataTypes.STRING,
            motorista:DataTypes.STRING,
            data:DataTypes.STRING,
            horaInicial:DataTypes.STRING,
            horaFinal:DataTypes.STRING,
            horimetroInicial:DataTypes.STRING,
            horimetroFinal:DataTypes.STRING,
            paradaInicial1:DataTypes.STRING,
            paradaFinal1:DataTypes.STRING,
            descricao1:DataTypes.STRING,
            paradaInicial2:DataTypes.STRING,
            paradaFinal2:DataTypes.STRING,
            descricao2:DataTypes.STRING,
            paradaInicial3:DataTypes.STRING,
            paradaFinal3:DataTypes.STRING,
            descricao3:DataTypes.STRING,
            paradaInicial4:DataTypes.STRING,
            paradaFinal4:DataTypes.STRING,
            descricao4:DataTypes.STRING,
            paradaInicial5:DataTypes.STRING,
            paradaFinal5:DataTypes.STRING,
            descricao5:DataTypes.STRING,
            paradaInicial6:DataTypes.STRING,
            paradaFinal6:DataTypes.STRING,
            descricao6:DataTypes.STRING,
            paradaInicial7:DataTypes.STRING,
            paradaFinal7:DataTypes.STRING,
            descricao7:DataTypes.STRING,
            paradaInicial8:DataTypes.STRING,
            paradaFinal8:DataTypes.STRING,
            descricao8:DataTypes.STRING,
            paradaInicial9:DataTypes.STRING,
            paradaFinal9:DataTypes.STRING,
            descricao9:DataTypes.STRING,
            paradaInicial10:DataTypes.STRING,
            paradaFinal10:DataTypes.STRING,
            descricao10:DataTypes.STRING,
            lanternagem:DataTypes.STRING,
            h2o:DataTypes.STRING,
            oleo:DataTypes.STRING,
            hidraulico:DataTypes.STRING,
            observacoes:DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Uc13;