const sequelize = require('../../src/tables/db.config');
const Script = sequelize.import('../../src/tables/script');
Script.sync({force: false});

module.exports = class ScriptModel {
    static async createScript(data) {
        try {
            return await Script.create({
                ...data
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async updateScript(id, data) {
        await Script.update({
            ...data
        }, {
            where: {id},
            fields: Object.keys(data)
        });

        return true;
    }
    static async getScript() {
        return await Script.findAndCountAll()
    }
};