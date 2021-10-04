module.exports = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    database: 'node',
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true
    }
};