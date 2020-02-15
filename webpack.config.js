const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getWebpackModule = require('./webpack.module');
const getWebpackPlugins = require('./webpack.plugins');
const getWebpackOptimization = require('./webpack.optimization');


// eslint-disable-next-line no-unused-vars
module.exports = (env = {}, argv) => {
    /**
     * 注意，环境变量限制入参只能是对象（足够使用了），不能是字符串和数组。
     * 参考文档：
     * https://webpack.js.org/guides/environment-variables/
     * https://webpack.js.org/api/cli/#environment-options
     */
    const { devMode } = env;
    const { module } = getWebpackModule(env);
    const { plugins } = getWebpackPlugins(env);
    const { optimization } = getWebpackOptimization(env);
    console.log('> env', env);
    console.log('> devMode', devMode);

    return {
        /** for common */
        /**
         * 强烈推荐使用mode设置编译时的开发和产品模式，不要再手动设置process.env.NODE_ENV。
         * 参考文档：https://webpack.js.org/configuration/mode/
         */
        mode: devMode ? 'development' : 'production',
        entry: {
            login: './src/index.js',
            second: './src/second.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'), // [可省略] 默认输出到dist
            publicPath: '/',
            filename: `js/[name]${devMode ? '' : '.[hash]'}.bundle.js`,
            chunkFilename: `js/[id]${devMode ? '' : '.[hash]'}.js`,
        },
        plugins: [
            new HtmlWebpackPlugin({
                chunks: ['login'],
                template: './src/index.ejs',
                filename: 'index.html',
            }),
            ...plugins,
        ],
        resolve: {
            alias: {
                lodash: 'lodash-es', // 为lodash-es设置别名，现在import 'lodash'引入的是lodash-es。
                '@': path.resolve(__dirname, 'src'),
            },
            /**
             * 可以不用配置该项，默认值为['.wasm', '.mjs', '.js', '.json']。
             * 重写是为了照顾喜欢写.jsx扩展的朋友。如果你不喜欢写.jsx扩展，那么没必要设置他。
             * 注意：
             * If multiple files share the same name but have different extensions,
             * webpack will resolve the one with the extension listed first in the array and skip the rest.
             */
            extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs'],
        },
        externals: {
            /** 如有需要，Code here... */
        },
        module,
        /**
         * 控制source maps的生成
         * 推荐：eval-cheap-module-source-map（开发环境）和source-map(独立map文件，用于产品环境),
         * 参考文档：https://webpack.js.org/configuration/devtool/
         */
        devtool: devMode ? 'eval-cheap-module-source-map' : 'source-map',
        optimization,
        /** only for development */
        devServer: {
            port: 9001,
            hot: true,
            open: true,
            index: 'index.html', // [可省略] 默认index.html
            /**
             * 0.0.0.0允许通过IP访问你机器; localhost（默认值）以本地localhost访问打开浏览器，别人无法访问你机器。
             * 配合useLocalIp，可直接以本地IP打开你的浏览器。
             * 如不想局域网内其他电脑通过IP访问你的机器，请注释下面两行配置（host和useLocalIp）。
             */
            host: '0.0.0.0',
            useLocalIp: true,
            /** 设置服务器的静态目录 */
            // contentBase: './dist',
            /**
             * 注意：编译后的文件是放在内存中的，但是会绑定到devServer中，如果想改变devServer绑定的根路径，可以设置publicPath。
             * 例如编译后首页是home.html，设置了publicPath: '/test/'，那么现在访问就是http://localhost:9001/test/home.html
             */
            // publicPath: '/test/',
        },
    };
};
