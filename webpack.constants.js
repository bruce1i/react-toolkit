/**
 * 注意：
 * - 请不要在另外的文件中管理需在编译时注入的全局常量。
 *
 * 原理：
 * - 使用webpack.DefinePlugin在编译时注入全局常量。
 *
 * 用法：
 * - 不依赖配置环境的全局常量写在common中。
 * - 依赖配置环境的全局常量写在constants中。
 * - 导出时，common和constants会合并在一起。
 * - 建议常量名称前带上 WC_ 前缀（webpack constant缩写），以区分代码中不同的常量类型。
 */

const common = {
    /**
     * 常见问题：
     * - JSON.stringify不是必须的，例如 WC_DEMO 和 WC_DEMO2 的写法是一样的。
     * - 非字符串是不用JSON.stringify的。
     * - 参考文档 https://webpack.js.org/plugins/define-plugin/#usage
     */
    // WC_DEMO: '"Hello Dev"',
    // WC_DEMO2: JSON.stringify('Hello Dev'),
    WC_MOCK_SERVER: 'http://localhost:3000',
};

const constants = {
    /**
     * 使用：
     * - dev, test, prod是指需要在哪个配置环境下注入常量，通过env.constEnv设置。例：webpack --env.constEnv=test
     * - 你可以添加更多的配置环境，也可以自己取名，而不用dev、test和prod，只要env.constEnv的值跟你起的名字对上就行。
     */
    dev: {
        // WC_DEMO3_URL: '"http://www.dev.com"',
        WC_API_SERVER: 'http://0.0.0.0',
    },
    test: {
        // WC_DEMO3_URL: '"http://www.test.com"',
        WC_API_SERVER: 'http://0.0.0.0',
    },
    prod: {
        // WC_DEMO3_URL: '"http://www.prod.com"',
        WC_API_SERVER: 'http://0.0.0.0',
    },
};

module.exports = ({ constEnv }) => ({ ...common, ...(constants[constEnv] || {}) });
