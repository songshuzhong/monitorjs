const sequelize = require('../../src/tables/db.config');
const Performance = sequelize.import('../../src/tables/performance');
Performance.sync({force: false});

module.exports = class PerformanceModel {
    static async createPerformance(data) {
        try {
            return await Performance.create({
                ...data
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async updatePerformance(id, data) {
        await Performance.update({
            ...data
        }, {
            where: {id},
            fields: Object.keys(data)
        });

        return true;
    }
    static async getPerformance() {
        return await Performance.findAndCountAll()
    }
};