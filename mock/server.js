const jsonServer = require('json-server');
const id = require('./id');
const compatible = require('./compatible');
const render = require('./render');
const { routes, dbs, methods } = require('./api');

// console.log('> routes', routes);
// console.log('> dbs', dbs);
// console.log('> methods', methods);

id.startAt(100);

const server = jsonServer.create();
const router = jsonServer.router(dbs);
const middlewares = jsonServer.defaults();

router.render = render(router, methods);
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(compatible);
server.use(jsonServer.rewriter(routes));
server.use(router);
server.listen(3000, () => {
    console.log('Mock Server is running');
});
