const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const {dev} = env

    return [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
    ]
}
