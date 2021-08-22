const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            nome:DataTypes.STRING,
            cpf:DataTypes.STRING,
            dataNasc:DataTypes.STRING,
            telefone:DataTypes.STRING,
            matricula:DataTypes.STRING,
            endereco:DataTypes.STRING,
            senha:DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Funcionario;