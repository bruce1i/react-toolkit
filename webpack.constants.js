const constants = {
    /**
     * 需要使用webpack.DefinePlugin在编译时注入的全局常量
     *
     * 注意：
     * - 请不要在另外的文件里去管理需要根据不同环境改变的全局常量。
     *
     * 常见问题：
     * - 其实JSON.stringify不是必须，参见下面的 WC_DEMO 和 WC_DEMO5_IS_DEV。
     * - 参考文档 https://webpack.js.org/plugins/define-plugin/#usage
     *
     * 使用：
     * - dev, test, prod是指需要在哪个环境下注入常量，通过env.constEnv设置。例：webpack --env.constEnv=test
     * - 你也可以添加更多的环境，也可以自己取名，而不用dev, test和prod。只要env.constEnv的值跟你起的名字对上就行。
     * - 建议常量名称前带上 WC_ 前缀（webpack constant缩写），以区分代码中不同的常量类型。
     */
    // dev: {
    //     WC_DEMO: '"Hello Dev"',
    //     WC_DEMO2: JSON.stringify('Hello Dev'),
    //     WC_DEMO3_URL: '"http://www.dev.com"',
    //     WC_DEMO4_HOST: '"www.dev.com"',
    //     WC_DEMO5_IS_DEV: true, // 非字符串是不用JSON.stringify的
    // },
    // test: {
    //     WC_DEMO: '"Hello Test"',
    //     WC_DEMO2: JSON.stringify('Hello Test'),
    //     WC_DEMO3_URL: '"http://www.test.com"',
    //     WC_DEMO4_HOST: '"www.test.com"',
    // },
    // prod: {
    //     WC_DEMO: '"Hello Prod"',
    //     WC_DEMO2: JSON.stringify('Hello Prod'),
    //     WC_DEMO3_URL: '"http://www.prod.com"',
    //     WC_DEMO4_HOST: '"www.prod.com"',
    // }
}

module.exports = ({constEnv}) => constants[constEnv] || {}
