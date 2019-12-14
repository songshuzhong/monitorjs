const sequelize = require('./db.config');

function createTable() {
    const Performance = sequelize.import('./performance');
    const Network = sequelize.import('./network');
    const Resource = sequelize.import('./resource');
    const Script = sequelize.import('./script');
    const Entry = sequelize.import('./entry');

    Performance.sync({force: false});
    Network.sync({force: false});
    Resource.sync({force: false});
    Script.sync({force: false});
    Entry.sync({force: false});
}

createTable();