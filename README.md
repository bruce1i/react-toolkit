# react-toolkit

## Demo-3改动
- 使用@reduxjs/toolkit重构
- 移除redux安装包
- 移除redux-thunk安装包
- 移除redux-actions安装包
#### 小结
@reduxjs/toolkit确实简化了redux的配置，减少了很多代码。
不需要手动配置Redux DevTools Extension了、
不需要引用redux包了（已经封装进去了）、
不需要引用redux-thunk包了（已经封装进去了）、
不在需要redux-actions辅助包了（@reduxjs/toolkit的createSlice提供了添加类型前缀的功能）。

## 项目核心依赖包
#### React相关
- npm install react react-dom
- npm install prop-types // prop类型检测
- npm install react-router-dom // 不需要安装react-router，react-router-dom是DOM bindings for React Router
- npm install react-router-config // 【辅助包，已安装】通过路由配置项（对象数组）生成路由节点
#### Redux相关
- npm install react-redux // 提供connect方法让你连接组件到store
- npm install @reduxjs/toolkit // 【辅助包，已安装】redux官方推荐工具包
- npm install redux-saga // 处理副作用，跟redux-thunk处理副作用的方式不同，但是两者可以很好的共存
#### React热加载
- npm install react-hot-loader
- npm install @hot-loader/react-dom // 支持hooks热加载
#### 推荐库
- npm install antd
- npm install classnames // 有条件地连接样式名称
- npm install core-js regenerator-runtime // 浏览器垫片（需在babel配置文件中配置使用方式）; IE需要regenerator-runtime运行时
- npm install lodash-es // 推荐从lodash过渡到lodash-es；lodash-es的优势：更小的体积，无需配置，按需打包

## 开发编译时依赖包
#### Webpack相关
- npm install webpack webpack-cli --save-dev // webpack-cli用在命令行运行webpack
- npm install html-webpack-plugin --save-dev // 把html文件和js文件合并在一起
- npm install webpack-dev-server --save-dev // 开发环境用的临时服务器（支持热加载）
- npm install copy-webpack-plugin --save-dev // 文件（夹）拷贝插件，支持devServer
- npm install hard-source-webpack-plugin --save-dev // 编译缓存，加速编译速度
- npm install rimraf --save-dev // 清除文件夹和文件
- npm install serve --save-dev // 傻瓜静态服务器，文档见 https://github.com/zeit/serve
- npm install cross-env --save-dev // 配置跨平台环境变量
- npm install npm-run-all --save-dev // 并行启动多个脚本
#### Babel相关
- npm install @babel/core @babel/preset-env --save-dev // babel核心和预置语法转换
- npm install @babel/preset-react --save-dev // 支持转换jsx语法
- npm install babel-loader --save-dev // 使用babel转换webpack的模块
#### CSS相关
- npm install css-loader --save-dev
- npm install style-loader --save-dev // 【没用了，被mini-css-extract-plugin替代了】注入样式到DOM（写入<style></style>）
- npm install url-loader --save-dev // 转换css中图片等为base64 URIs
- npm install file-loader --save-dev // url-loader执行fallback时会调用
- npm install less less-loader --save-dev
- npm install postcss-loader autoprefixer --save-dev // 使用postcss添加浏览器前缀，autoprefixer是postcss的浏览器前缀插件
- npm install mini-css-extract-plugin --save-dev // 提取css到单独文件
- npm install optimize-css-assets-webpack-plugin --save-dev // 压缩css文件
#### JS相关
- npm install terser-webpack-plugin --save-dev // 压缩js文件
#### SVG相关
- npm install @svgr/webpack --save-dev //svg loader，使svg模块化
#### ESLint相关
- npm install eslint --save-dev
- npm install eslint-plugin-import --save-dev
- npm install eslint-plugin-react --save-dev
- npm install eslint-plugin-react-hooks --save-dev
- npm install eslint-plugin-jsx-a11y --save-dev
- npm install eslint-config-airbnb --save-dev // 爱彼迎的eslint规则依赖上面4个包
- npm install babel-eslint --save-dev // 识别babel语法（例如：Unexpected token import）
- npm install eslint-loader --save-dev // 在编译代码时进行eslint检查
#### 测试相关
- npm install jest --save-dev // jest会自动安装babel-jest包（jest是在node下跑的，node本身不支持import语法，需要babel来转换）
- npm install @testing-library/react --save-dev // 官方推荐测试包（不要再使用react-testing-library包了，该包已经废弃了）
- npm install @testing-library/jest-dom --save-dev //【辅助包，已安装】扩展jest的matcher，更方便的操作dom
#### Mock相关
- npm install json-server --save-dev // Get a full fake REST API
- npm install nodemon --save-dev // 用来配置mock文件有修改，自动重启服务
