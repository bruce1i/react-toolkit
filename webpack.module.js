const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const {dev} = env

    const miniCssExtractPluginLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            // 修改css中资源文件(例url)的显示路径（但不会修改资源文件真实输出路径，真实路径由file-loader控制）
            // publicPath: '/style/',
            // only enable hot in development
            hmr: !!dev,
            // if hmr does not work, this is a forceful method.
            // https://github.com/webpack-contrib/mini-css-extract-plugin#hot-module-reloading-hmr
            reloadAll: true,
        }
    }

    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                // use '[path][name]__[local]' for development
                // use '[hash:base64]' for production
                // 推荐来自官方文档 https://github.com/webpack-contrib/css-loader#modules
                // https://github.com/webpack/loader-utils#interpolatename
                localIdentName: dev ? '[path][name]__[local]' : '[hash:base64]',
            },
            // 支持使用驼峰规则来引用导出样式(包含破折号和下划线)，而不用写字符串。
            // 例 style['blue-gbc']可以用style.blueGbc来代替
            localsConvention: 'camelCase',
            // 注意：在使用less-loader或其他支持解析@import的loader时，不需要设置importLoaders。
            // 下面的链接解释了这个是做什么用：
            // https://github.com/webpack-contrib/css-loader/issues/228#issuecomment-312885975
            // importLoaders: 0,
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                require('autoprefixer')()
            ]
        }
    }

    return {
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
                    test: /\.(css|less)$/,
                    // 多个loader使用use，loader的执行顺序是倒序（从右到左，或从下到上）
                    // 支持字符串写法，例 use:['style-loader'] 是 use:[{loader:'style-loader'}]的捷径
                    // use: ['style-loader', cssLoader, postcssLoader, 'less-loader'],
                    use: [miniCssExtractPluginLoader, cssLoader, postcssLoader, 'less-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                },
            ]
        }
    }
}
