module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'airbnb/hooks'],
    ignorePatterns: [
        'src/assets/lib/',
    ],
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        worker: true,
        amd: true,
        jest: true,
        jquery: true,
    },
    rules: {
        /**
         * "off" or 0 - turn the rule off
         * "warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
         * "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
         */
        // error
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'max-len': ['error', { code: 130 }],
        // warn
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
        // off
        'import/no-unresolved': ['off'], // 关闭原因：无法正确解析webpack别名
    }
};
