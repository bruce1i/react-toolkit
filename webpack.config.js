const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('> process.env.HOST', process.env.HOST)

module.exports = {
    // for common
    entry: {
        login: './src/index.js',
        second: './src/second.js',
    },
    output: {
        // path: path.resolve(__dirname, 'dist'), // 可省，默认输出到dist
        filename: '[name].bundle.[hash:5].js', // [name],[hash],[hash:5],[id],[chunkhash],[contenthash]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['login'],
            template: "./src/index.html",
            filename: "first-page.html",
        })
    ],
    // for development
    mode: "development",
    // 用于控制source maps的生成
    // 推荐这三个选项：source-map(独立map文件，用于产品环境),inline-source-map,eval-source-map
    devtool: 'eval-source-map',
    devServer: {
        port: 9001,
        hot: true,
        // 用于设置服务器的静态目录
        // 注意：webpack编译后的文件是放在内存中的，但是会绑定到devServer中，如果想改变编译后的根路径，可以设置publicPath
        // contentBase: './dist',
        // 例如编译后首页是home.html，设置了publicPath: '/test/'，那么现在访问就是http://localhost:9001/test/home.html
        // publicPath: '/test/',
        // 可以通过IP地址访问
        // host: '0.0.0.0',
    }
};
