const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env) => {
    const {devMode} = env
    const srcDir = path.resolve(__dirname, 'src')

    /**
     * mini-css-extract-plugin还需要在webpack.plugins.js中配置输出文件规则
     */
    const miniCssExtractPluginLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
            /**
             * 开启css热加载
             * 注意：only enable hot in development
             */
            hmr: !!devMode,
            /**
             * 强制css热加载（因为在某些原因下，热加载会失效，所以这里强制开启了完全加载刷新）
             * 参考文档：https://github.com/webpack-contrib/mini-css-extract-plugin#hot-module-reloading-hmr
             */
            reloadAll: true,
        }
    }

    const cssLoader = {
        loader: 'css-loader',
        options: {
            modules: {
                /**
                 * use '[path][name]__[local]' for development
                 * use '[hash:base64]' for production
                 * 推荐名称来自官方文档：https://github.com/webpack-contrib/css-loader#modules
                 * 占位符文档：https://github.com/webpack/loader-utils#interpolatename
                 */
                localIdentName: devMode ? '[path][name]__[local]' : '[hash:base64]',
            },
            /**
             * 支持使用驼峰规则来引用导出样式(包含破折号和下划线)，而不用写字符串。
             * 例 style['blue-gbc']可以用style.blueGbc来代替
             */
            localsConvention: 'camelCase',
            /**
             * 注意：
             * importLoaders是容易使用错误的配置项。
             * 在使用less-loader或其他支持解析@import的loader时，不需要设置importLoaders。
             * 下面的链接解释了这个是做什么用：
             * https://github.com/webpack-contrib/css-loader/issues/228#issuecomment-312885975
             */
            // importLoaders: 0, // 不需要配置
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

    const urlLoaderFallback = {
        loader: 'file-loader',
        options: {
            name: `img/[name].[contenthash${devMode ? ':7' : ''}].[ext]`,
        }
    }

    return {
        module: {
            rules: [
                {
                    test: /\.jsx?$/, // 匹配.js或.jsx
                    /**
                     * 当只有一个loader时，可直接使用loader和options；多个loader要使用use。
                     * Rule.loader is a shortcut to Rule.use: [ { loader } ]
                     * Rule.options is a shortcut to Rule.use: [ { options } ]
                     */
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|less)$/,
                    /**
                     * 多个loader使用use，loader的执行顺序是倒序（从右到左，或从下到上）
                     * 支持字符串写法，例 use:['less-loader'] 是 use:[{loader:'less-loader'}]的捷径
                     */
                    use: [miniCssExtractPluginLoader, cssLoader, postcssLoader, 'less-loader'],
                },
                {
                    test: /\.(png|jpe?g|gif|)$/i,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: urlLoaderFallback,
                    },
                },
                {
                    test: /\.svg$/i,
                    /**
                     * 模块化svg作为组件使用，也可以直接作为src和url来使用
                     * 参考文档：https://react-svgr.com/docs/webpack/
                     */
                    use: ['@svgr/webpack', 'url-loader']
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/i,
                    loader: 'file-loader',
                    options: {
                        name: `fonts/[name].[contenthash${devMode ? ':7' : ''}].[ext]`,
                    }
                },
                {
                    /**
                     * 非js、img、css和fonts分类的都归为assets
                     * 根据需要自己在下面添加要导出的文件格式（默认添加了文本、word和excel的文件导出作为例子）
                     */
                    test: /\.(txt|md|docx?|xlsx?|csv)$/i,
                    loader: 'file-loader',
                    options: {
                        name: (file) => {
                            const docDir = path.resolve(srcDir, 'assets', 'doc')
                            console.log('--------- file-loader ---------')
                            console.log('> path.sep', path.sep)
                            console.log('> srcDir', srcDir)
                            console.log('> docDir', docDir)
                            console.log('> file  ', file)
                            if (file.startsWith(docDir + path.sep)) {
                                console.log('> test true')
                                const fileName = file.replace(srcDir + path.sep, '')
                                console.log('> fileName', fileName)
                                return fileName
                            }

                            console.log('> test false')
                            return 'assets/[name].[contenthash:7].[ext]';
                        },
                    }
                }
            ]
        }
    }
}
