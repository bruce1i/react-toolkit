const presets = [
    ['@babel/preset-env', {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: {
            chrome: '72',
            // antd 4.0开始只支持到ie11。查看浏览器市场份额 https://tongji.baidu.com/research/site
            ie: '11'
        }
    }],
    '@babel/preset-react'
];

const plugins = [
    'react-hot-loader/babel'
];

module.exports = {
    presets,
    plugins
};
