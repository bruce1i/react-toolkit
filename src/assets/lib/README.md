# lib文件夹

**这是一个特殊的文件夹，专门用来存放需要在html中引入的第三方js和css文件。**

### 用法

例如在html页面不想引入jQuery的cdn地址，而是想从本地项目里面引入，那么你可以把jQuery源文件放在这个文件夹中。

然后在html页面中引入：

```html
<script src="/assets/lib/jquery.js"></script>
<link rel="stylesheet" href="/assets/lib/xxx.css">
```

### 注意

* 不要在该文件夹下放非js和css文件。

* 项目中import该文件夹中的css文件，该css文件只会被miniCssExtractPluginLoader和cssLoader进行处理。

* 这个文件夹中的文件都会用CopyWebpackPlugin插件拷贝到dist的assets/lib文件夹下原样输出（包括文件夹路径）。
