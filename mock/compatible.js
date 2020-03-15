const id = require('./id');

module.exports = (req, res, next) => {
    // console.log('> --- entry ---');
    // console.log('> req.url', req.url);
    // console.log('> req.method', req.method);
    // console.log('> req.baseUrl', req.baseUrl);
    // console.log('> req.originalUrl', req.originalUrl);
    // console.log('> req._parsedUrl', req._parsedUrl);
    // console.log('> req.params', req.params);
    // console.log('> req.query', req.query);
    // console.log('> req.body', req.body);

    if (req.method === 'POST') {
        // 处理id
        if (req.query._id) {
            req.body.id = id.new();
            req.body[req.query._id] = id.get();
        } else if (req.query._sid) {
            req.body.id = id.new('s');
            req.body[req.query._sid] = id.get();
        } else {
            req.body.id = id.new();
        }
    }
    if (['PUT', 'PATCH', 'DELETE'].includes(req.method)) {
        if (req.query._id || req.query._sid) {
            // 处理需要从body中提取id放到url上
            const name = req.query._id || req.query._sid;
            const putId = req.body[name];
            req.body[name] = req.query._id ? parseInt(putId, 10) : putId.toString();
            req.url = `${req._parsedUrl.pathname}/${putId}`;

            console.log('> new url', req.url);
        } else if (req.query._aid || req.query._asid) {
            // 处理需要从url上提取id添加到body中
            const name = req.query._aid || req.query._asid;
            const putId = /\/([0-9]+)$/.exec(req._parsedUrl.pathname)[1];
            req.body[name] = req.query._aid ? parseInt(putId, 10) : putId.toString();
        }
    }

    next();
};
