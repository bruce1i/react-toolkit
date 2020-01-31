const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getWebpackLoaders = require('./webpack.loaders');
const getWebpackPlugins = require('./webpack.plugins');
const getWebpackOptimizations = require('./webpack.optimizations')

console.log('> process.env.HOST', process.env.HOST)

module.exports = (env = {}, argv) => {
    // 环境变量，需要限制入参只能是对象，不能是字符串和数组，要不然下面的解析代码会出错
    // https://webpack.js.org/guides/environment-variables/
    // https://webpack.js.org/api/cli/#environment-options
    console.log('> env', env)
    // console.log('> argv', argv)
    const {dev} = env
    const mode = dev ? 'development' : 'production'
    const devtool = dev ? 'eval-source-map' : 'source-map'
    const loaders = getWebpackLoaders(env)
    const plugins = getWebpackPlugins(env)
    const optimizations = getWebpackOptimizations(env)
    console.log('> dev', dev)
    console.log('> mode', mode)
    console.log('> devtool', devtool)

    const config = {
        /** for common */
        mode: mode, // https://webpack.js.org/configuration/mode/
        entry: {
            login: './src/index.js',
            second: './src/second.js',
        },
        output: {
            // path: path.resolve(__dirname, 'dist'), // 可省，默认输出到dist
            filename: '[name].bundle.[hash:5].js', // [name],[hash],[hash:5],[id],[chunkhash],[contenthash]
        },
        module: {
            rules: loaders
        },
        plugins: [
            new HtmlWebpackPlugin({
                chunks: ['login'],
                template: "./src/index.html",
                filename: "first-page.html",
            }),
            ...plugins
        ],
        optimization: optimizations,
        // 用于控制source maps的生成
        // 推荐这三个选项：source-map(独立map文件，用于产品环境),inline-source-map,eval-source-map
        devtool: devtool,
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
    };

    return config
}
