const base = require('./base');

module.exports = Resource = (sequelize, DataTypes) => {
    return sequelize.define('t_resource', {
        ...base(DataTypes),
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'tag'
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'url'
        },
        msg: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'msg'
        }
    });
};