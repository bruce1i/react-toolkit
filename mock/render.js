module.exports = (router, methods) => (req, res) => {
    // console.log('> --- render ---');
    // console.log('> req.url', req.url);
    // console.log('> req.method', req.method);
    // console.log('> req.baseUrl', req.baseUrl);
    // console.log('> req.originalUrl', req.originalUrl);
    // console.log('> req._parsedUrl', req._parsedUrl);
    // console.log('> req.params', req.params);
    // console.log('> req.query', req.query);
    // console.log('> req.body', req.body);
    // /\/([a-zA-Z_]+)[/?#]?/.exec('')

    const name = req._parsedUrl.pathname.split('/')[1];
    const method = req.method === 'DELETE' ? 'del' : req.method.toLowerCase();
    const result = methods[name][method] && methods[name][method]({
        data: res.locals.data,
        db: router.db.getState()[name],
        query: req.query,
        body: req.body,
    });

    res.send({
        code: 1,
        msg: 'from mock server',
        data: res.locals.data,
        ...(result || {}),
    });
};
