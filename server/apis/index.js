const Script = require('../models/script');
const Network = require('../models/network');
const Resource = require('../models/resource');
const Performance = require('../models/performance');
const Entry = require('../models/entry');

module.exports = {
    'GET /performance': async ctx => {
        try {
            const {rows} = await Performance.getPerformance();
            ctx.restify({status: 0, message: '查询成功', data: rows[0]});
        } catch (e) {
            ctx.cautify({status: 0, message: e.message});
        }
    },
    'POST /monitor': async ctx => {
        try {
            const {script, resource, network, performance} = ctx.request.body;
            if (performance.loadPage) {
                const {xmlhttprequest, css, other, script, img, link, fetch, ...rest} = performance;
                xmlhttprequest.length && xmlhttprequest.forEach(async item => await Entry.createEntry(item));
                css.length && css.forEach(async item => await Entry.createEntry(item));
                script.length && script.forEach(async item => await Entry.createEntry(item));
                img.length && img.forEach(async item => await Entry.createEntry(item));
                link.length && link.forEach(async item => await Entry.createEntry(item));
                fetch.length && fetch.forEach(async item => await Entry.createEntry(item));
                other.length && other.forEach(async item => await Entry.createEntry(item));
                await Performance.createPerformance(rest);
            }
            if (network.length) {
                network.forEach(async item => await Network.createNetwork(item));
            }
            if (script.length) {
                script.for(async item => await Script.createScript(item));
            }
            if (resource.length) {
                resource.forEach(async item => await Resource.createResource(item));
            }
            ctx.restify({status: 0, message: '数据已经接受并入库！！！！'});
        } catch (e) {
            ctx.cautify({status: 0, message: e.message});
        }
    }
};
