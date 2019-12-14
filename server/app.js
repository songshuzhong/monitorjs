/**
 *@file
 *@Date 2019/07/01
 *@author sshuzhong
 *@mailTo <a href="mailto:songshuzhong@baidu.com.cn">Song ShuZhong</a>
  */
const Koa = require('koa');
const Router = require('koa-router');
const withNext = require('./plugins/withNext');
const withProxy = require('./plugins/withProxy');
const withParser = require('./plugins/withParser');
const withCache = require('./plugins/withCache');
const withConfig = require('./plugins/withConfig');
const withRestify = require('./plugins/withRestify');
const withCompress = require('./plugins/withCompress');
const withApiObserver = require('./plugins/withApiObserver');
const dev = process.env.NODE_ENV !== 'production';
const server = new Koa();
const router = new Router();

if (dev) {
    // 配置接口代理
    withProxy(server);
}

withConfig(server);
withParser(server);
withCache(server);
withRestify(server);
withCompress(server);
withApiObserver(server, router);
withNext(server, router);

const port = server.setting.port;

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`🚀 Server ready at http://localhost:${port}`);
});
