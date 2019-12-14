const base = require('./base');

module.exports = Entry = (sequelize, DataTypes) => {
    return sequelize.define('t_entry', {
        ...base(DataTypes),
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'name'
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'duration'
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'size'
        }
    });
};