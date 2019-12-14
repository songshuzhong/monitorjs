const sequelize = require('../../src/tables/db.config');
const Resource = sequelize.import('../../src/tables/resource');
Resource.sync({force: false});

module.exports = class ResourceModel {
    static async createResource(data) {
        try {
            return await Resource.create({
                ...data
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async updateResource(id, data) {
        await Resource.update({
            ...data
        }, {
            where: {id},
            fields: Object.keys(data)
        });

        return true;
    }
    static async getResource() {
        return await Resource.findAndCountAll()
    }
};