// const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getConstants = require('./webpack.constants');

module.exports = (env) => {
    const {devMode} = env
    const constants = getConstants(env)

    return {
        plugins: [
            new MiniCssExtractPlugin({
                /**
                 * 配置参考了 https://github.com/webpack-contrib/mini-css-extract-plugin#advanced-configuration-example
                 */
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '[name].bundle.css' : '[name].[hash].bundle.css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
            new webpack.DefinePlugin(constants)
        ]
    }
}
