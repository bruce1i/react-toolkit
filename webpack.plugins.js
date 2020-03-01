const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const getConstants = require('./webpack.constants');

module.exports = (env) => {
    const { devMode } = env;
    const constants = getConstants(env);

    const plugins = [
        new CopyPlugin([
            { from: 'src/assets/lib', to: 'assets/lib' },
        ]),
        /**
         * mini-css-extract-plugin还需要在webpack.module.js中配置loader
         * 配置参考了 https://github.com/webpack-contrib/mini-css-extract-plugin#advanced-configuration-example
         */
        new MiniCssExtractPlugin({
            filename: `css/[name]${devMode ? '' : '.[hash]'}.bundle.css`,
            chunkFilename: `css/[id]${devMode ? '' : '.[hash]'}.css`,
        }),
        new webpack.DefinePlugin(constants),
    ];

    if (devMode) {
        plugins.push(new HardSourceWebpackPlugin());
        plugins.push(new HardSourceWebpackPlugin.ExcludeModulePlugin([{
            /**
             * 参考文档 https://github.com/mzgoddard/hard-source-webpack-plugin#excludemoduleplugin
             */
            test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
        }]));
    }

    return {
        plugins,
    };
};
