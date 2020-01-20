# react-toolkit

## 项目核心依赖包
- npm install react react-dom
- npm install react-router-dom
- npm install react-router-config // 通过路由配置项（对象数组）生成路由节点
- npm install react-redux // 可以使用connect连接redux
- npm install redux
- npm install @reduxjs/toolkit
- npm install connected-react-router // 可以使用dispatch发送跳转路由

## 开发编译时依赖包
- npm install webpack webpack-cli --save-dev // webpack-cli用在命令行运行webpack
- npm install html-webpack-plugin --save-dev // 把html文件和js文件合并在一起
- npm install webpack-dev-server --save-dev // 开发环境用的临时服务器（支持热加载）
- npm install rimraf --save-dev // 清除文件夹和文件
#### Babel相关
- npm install @babel/core @babel/preset-env --save-dev // babel核心和预置语法转换
- npm install @babel/preset-react --save-dev // 支持转换jsx语法
- npm install babel-loader --save-dev // 使用babel转换webpack的模块
