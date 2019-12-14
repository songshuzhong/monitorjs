const compress = require('koa-compress');

module.exports = withCompress = server => {
    server.use(compress());
};