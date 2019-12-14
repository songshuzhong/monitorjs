const base = require('./base');

module.exports = Performance = (sequelize, DataTypes) => {
    return sequelize.define('t_performance', {
        ...base(DataTypes),
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        redirect: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'redirect'
        },
        whiteScreen: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'whiteScreen'
        },
        dom: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'dom'
        },
        load: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'load'
        },
        unload: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'unload'
        },
        request: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'request'
        },
        loadPage: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'loadPage'
        },
        domReady: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'domReady'
        },
        lookupDomain: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'lookupDomain'
        },
        ttfb: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ttfb'
        },
        loadEvent: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'loadEvent'
        },
        appcache: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'appcache'
        },
        unloadEvent: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'unloadEvent'
        },
        connect: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'connect'
        }
    });
};