const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_monitor', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
        charset: "utf8mb4",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    define: {underscored: true},
    query: {raw: true},
    timezone: '+08:00' //东八时区
});

module.exports = sequelize;