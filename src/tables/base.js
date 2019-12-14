const moment = require('moment');

module.exports = DataTypes => {
    return {
        uploadType: {
            type: DataTypes.STRING(20),
            allowNull: true,
            field: 'uploadType'
        },
        happenTime: {
            type: DataTypes.STRING(13),
            allowNull: true,
            field: 'happenTime'
        },
        webMonitorId: {
            type: DataTypes.STRING(36),
            allowNull: true,
            field: 'webMonitorId'
        },
        customerId: {
            type: DataTypes.STRING(50),
            allowNull: true,
            field: 'customerId'
        },
        simpleUrl: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'simpleUrl'
        },
        completeUrl: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: 'completeUrl'
        },
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    };
};