module.exports = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '12345',
    database: 'node',
    define: {
        timestamps: true,
        underscored: true,
        freezeTableName: true
    }
};