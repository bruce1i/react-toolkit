const fs = require('fs');
const path = require('path');

const apiPath = path.resolve(__dirname, 'apis');

const routes = {};
const dbs = {};
const methods = {};

fs.readdirSync(apiPath).forEach((path) => {
    const api = require(`./apis/${path}`);
    const name = path.replace('.js', '');
    const {
        route, db, get, post, put, patch, del,
    } = api;

    // 配置路由映射
    if (route) {
        route.forEach((item) => {
            routes[item.from] = item.to;
        });
    } else {
        routes[`/${name.replace(/_/g, '/')}*`] = `/${name}$1`;
    }

    // 配置db
    dbs[name] = db;

    // 配置method
    methods[name] = {
        get, post, put, patch, del,
    };
});

module.exports = {
    routes,
    dbs,
    methods,
};
