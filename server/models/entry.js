const sequelize = require('../../src/tables/db.config');
const Entry = sequelize.import('../../src/tables/entry');
Entry.sync({force: false});

module.exports = class EntryModel {
    static async createEntry(data) {
        try {
            return await Entry.create({
                ...data
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async updateEntry(id, data) {
        await Entry.update({
            ...data
        }, {
            where: {id},
            fields: Object.keys(data)
        });

        return true;
    }
    static async getEntry() {
        return await Entry.findAndCountAll()
    }
}