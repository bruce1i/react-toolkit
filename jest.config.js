module.exports = {
    // 设置需要生成哪些js文件的覆盖数据
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!src/assets/lib/**',
    ],
    // 主要用来配置非js文件的mock；jest不支持webpack别名，想支持别名也可以在这里配置
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|less)$':
            '<rootDir>/test/__mocks__/styleMock.js',
    },
    // 把jest-dom的扩展在这里进行了导入，以后测试文件中就不需要手动导入jest-dom了
    setupFilesAfterEnv: ['./jest.setup.js'],
};
