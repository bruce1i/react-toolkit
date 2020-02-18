# react-toolkit

## 项目核心依赖包
- npm install react react-dom
- npm install react-router-dom // 不需要安装react-router，react-router-dom是DOM bindings for React Router
- npm install react-router-config // 【辅助包，已安装】通过路由配置项（对象数组）生成路由节点
- npm install redux
- npm install react-redux // 提供connect方法让你连接组件到store
- npm install @reduxjs/toolkit // 【辅助包，已安装】redux官方推荐工具包
- npm install connected-react-router // 【辅助包，自行按需安装】绑定react路由到redux，可以使用dispatch发送路由跳转
- npm install core-js // 浏览器垫片
#### 推荐库
- npm install lodash-es // 推荐从lodash过渡到lodash-es；lodash-es的优势：更小的体积，无需配置，按需打包

## 开发编译时依赖包
#### Webpack相关
- npm install webpack webpack-cli --save-dev // webpack-cli用在命令行运行webpack
- npm install html-webpack-plugin --save-dev // 把html文件和js文件合并在一起
- npm install webpack-dev-server --save-dev // 开发环境用的临时服务器（支持热加载）
- npm install copy-webpack-plugin --save-dev // 文件（夹）拷贝插件，支持devServer
- npm install rimraf --save-dev // 清除文件夹和文件
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
