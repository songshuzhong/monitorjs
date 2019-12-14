const base = require('./base');

module.exports = Script = (sequelize, DataTypes) => {
    return sequelize.define('t_script', {
        ...base(DataTypes),
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        device: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'device'
        },
        infoType: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'infoType'
        },
        col: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'col'
        },
        row: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'row'
        },
        msg: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'msg'
        }
    });
};