const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env) => {
    const {dev} = env

    return {
        optimization: {
            // 用于控制是否启用下面minimizer中的插件
            // 注意：不要主动设置该项，该项会根据mode自动配置。除非用于调试，否则请不要手动设置该项。
            // https://webpack.js.org/configuration/optimization/#optimizationminimize
            // minimize: true,
            // minimizer的配置参考了下面的文档
            // https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
            // https://github.com/webpack-contrib/terser-webpack-plugin#remove-comments
            minimizer: [
                new TerserJSPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
                new OptimizeCSSAssetsPlugin(),
            ],
        }
    }
}
