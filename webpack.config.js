const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getWebpackModule = require('./webpack.module');
const getWebpackPlugins = require('./webpack.plugins');
const getWebpackOptimization = require('./webpack.optimization')


module.exports = (env = {}, argv) => {
    // 环境变量，需要限制入参只能是对象，不能是字符串和数组，要不然下面的解析代码会出错
    // https://webpack.js.org/guides/environment-variables/
    // https://webpack.js.org/api/cli/#environment-options
    console.log('> env', env)
    // console.log('> argv', argv)
    const {dev} = env
    const mode = dev ? 'development' : 'production'
    const devtool = dev ? 'eval-source-map' : 'source-map'
    const {module} = getWebpackModule(env)
    const {plugins} = getWebpackPlugins(env)
    const {optimization} = getWebpackOptimization(env)
    console.log('> dev', dev)
    console.log('> mode', mode)
    console.log('> devtool', devtool)

    return {
        /** for common */
        mode: mode, // https://webpack.js.org/configuration/mode/
        entry: {
            login: './src/index.js',
            second: './src/second.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'), // [可省略] 默认输出到dist
            filename: dev ? '[name].bundle.js' : '[name].[hash].bundle.js', // [name],[hash],[hash:5],[id],[chunkhash],[contenthash]
            chunkFilename: dev ? '[id].js' : '[id].[hash].js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                chunks: ['login'],
                template: "./src/index.ejs",
                filename: "first-page.html",
            }),
            ...plugins
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            },
            /**
             * 可以不用配置该项，默认值为['.wasm', '.mjs', '.js', '.json']。
             * 由于默认值没有支持.jsx扩展，所以这里重写了。如果你不用.jsx扩展，那么没必要设置他。
             * 注意：
             * If multiple files share the same name but have different extensions,
             * webpack will resolve the one with the extension listed first in the array and skip the rest.
             */
            extensions: ['.js', '.jsx', '.json', '.wasm', '.mjs']
        },
        externals: {
            /** Code here... */
        },
        module: module,
        // 用于控制source maps的生成
        // 推荐这三个选项：source-map(独立map文件，用于产品环境),inline-source-map,eval-source-map
        devtool: devtool,
        optimization: optimization,
        /** only for development */
        devServer: {
            open: true,
            port: 9001,
            hot: true,
            index: 'first-page.html',
            // 允许通过IP访问，配合useLocalIp，浏览器可直接打开本地IP。如不想局域网内其他电脑通过IP访问，注释下面两行配置。
            host: '0.0.0.0',
            useLocalIp: true,
            // 用于设置服务器的静态目录
            // 注意：webpack编译后的文件是放在内存中的，但是会绑定到devServer中，如果想改变编译后的根路径，可以设置publicPath
            // contentBase: './dist',
            // 例如编译后首页是home.html，设置了publicPath: '/test/'，那么现在访问就是http://localhost:9001/test/home.html
            // publicPath: '/test/',
        }
    }
}
