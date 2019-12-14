const sequelize = require('../../src/tables/db.config');
const Network = sequelize.import('../../src/tables/network');
Network.sync({force: false});

module.exports = class NetworkModel {
    static async createNetwork(data) {
        try {
            return await Network.create({
                ...data
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async updateNetwork(id, data) {
        await Network.update({
            ...data
        }, {
            where: {id},
            fields: Object.keys(data)
        });

        return true;
    }
    static async getNetwork() {
        return await Network.findAndCountAll()
    }
}