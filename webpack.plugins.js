const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const {dev} = env

    return {
        plugins: [
            new MiniCssExtractPlugin({
                /**
                 * 配置参考了 https://github.com/webpack-contrib/mini-css-extract-plugin#advanced-configuration-example
                 */
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: dev ? '[name].bundle.css' : '[name].[hash].bundle.css',
                chunkFilename: dev ? '[id].css' : '[id].[hash].css',
            })
        ]
    }
}
