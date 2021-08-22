const { Model, DataTypes } = require('sequelize');

class Mn01 extends Model {
    static init(sequelize) {
        super.init({
            motorista:DataTypes.STRING,
            data:DataTypes.STRING,
            horaInicial:DataTypes.STRING,
            horaFinal:DataTypes.STRING,
            horimetroInicial:DataTypes.STRING,
            horimetroFinal:DataTypes.STRING,
            banco:DataTypes.STRING,
            paradaFinal6:DataTypes.STRING,
            descricao6:DataTypes.STRING,
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
            lanternagem:DataTypes.STRING,
            pneus:DataTypes.STRING,
            h2o:DataTypes.STRING,
            oleo:DataTypes.STRING,
            direcao:DataTypes.STRING,
            freios:DataTypes.STRING,
            observacoes:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Mn01;