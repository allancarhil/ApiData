const { Model, DataTypes } = require('sequelize');

class Us36 extends Model {
    static init(sequelize) {
        super.init({ 
            nomeEquipamento:DataTypes.STRING,
            motorista:DataTypes.STRING,
            data:DataTypes.STRING,
            horaInicial:DataTypes.STRING,
            horaFinal:DataTypes.STRING,
            kmInicial:DataTypes.STRING,
            kmFinal:DataTypes.STRING,
            servicos:DataTypes.STRING,
            observacoes:DataTypes.STRING,
            lanternagem:DataTypes.STRING,
            pneus:DataTypes.STRING
        },{
            sequelize
        })
    }
}

module.exports = Us36;