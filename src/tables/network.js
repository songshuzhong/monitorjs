const base = require('./base');

module.exports = Network = (sequelize, DataTypes) => {
    return sequelize.define('t_network', {
        ...base(DataTypes),
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        httpUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'httpUrl'
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'status'
        },
        statusText: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'statusText'
        },
        statusResult: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'statusResult'
        },
        requestText: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'requestText'
        },
        responseText: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'responseText'
        },
        loadTime: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'loadTime'
        }

    });
};