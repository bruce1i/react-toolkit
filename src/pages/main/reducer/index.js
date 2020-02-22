const context = require.context('./', false, /\.js$/);

console.log('> context.keys', context.keys());
const reducers = context.keys()
    .filter((item) => item !== './index.js')
    .reduce((acc, cur) => {
        const [name, reducer] = context(cur).default;
        acc[name] = reducer;
        return acc;
    }, {});

export default reducers;

/**
 * require.context生成的代码
 */
// var map = {
//     "./index.js": "./src/pages/main/reducer/index.js",
//     "./test.jsx": "./src/pages/main/reducer/test.jsx"
// };
//
//
// function webpackContext(req) {
//     var id = webpackContextResolve(req);
//     return __webpack_require__(id);
// }
// function webpackContextResolve(req) {
//     if(!__webpack_require__.o(map, req)) {
//         var e = new Error("Cannot find module '" + req + "'");
//         e.code = 'MODULE_NOT_FOUND';
//         throw e;
//     }
//     return map[req];
// }
// webpackContext.keys = function webpackContextKeys() {
//     return Object.keys(map);
// };
// webpackContext.resolve = webpackContextResolve;
// module.exports = webpackContext;
// webpackContext.id = "./src/pages/main/reducer sync \\.js$";
