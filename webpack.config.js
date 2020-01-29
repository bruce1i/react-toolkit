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
    module: {
        rules: [
            {
                test: /\.jsx?$/, // 匹配.js或.jsx
                // 当只有一个loader时，可直接使用loader和options；多个loader要使用use。
                // Rule.loader is a shortcut to Rule.use: [ { loader } ]
                // Rule.options is a shortcut to Rule.use: [ { options } ]
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                // 多个loader使用use，loader的执行顺序是倒序（从右到左，或从下到上）
                use: [
                    // 支持字符串写法，例 use:['style-loader'] 是 use:[{loader:'style-loader'}]的捷径
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                // 例 '[path][name]__[local]--[hash:base64:5]'
                                // 推荐:
                                // '[path][name]__[local]' for development
                                // '[hash:base64]' for production
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                            // 支持使用驼峰规则来引用导出样式(包含破折号和下划线)，而不用写字符串。
                            // 例 style['blue-gbc']可以用style.blueGbc来代替
                            localsConvention: 'camelCase',
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ]
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
