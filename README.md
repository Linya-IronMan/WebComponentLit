# WebComponentLit
A WebComponent library by Lit

使用原生的 DOM 开发 WebComponent 太麻烦了，尝试使用相应的框架

这次仿照 arco-design UI进行开发

# 环境搭建

打算使用 `typescript` 以及 `scss` ，所以需要使用 `webpack` 来对这些文件语法进行解析。

并且还需要一个 `server` 来运行 `demo` 


安装了下面的依赖：
- webpack
- webpack-cli
- webpack-dev-server
- typescript
- ts-loader
- html-webpack-plugin: 直接为项目生成一个或多个HTML文件（HTML文件个数由插件实例的个数决定），并将webpack打包后输出的所有脚本文件自动添加到插件生成的HTML文件中。通过配置，可以将根目录下用户自定义的HTML文件作为插件生成HTML文件的模板。另外，还可以通过向插件传递参数，控制HTML文件的输出。


**webpack.config.js**

```javascript
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const dist = path.resolve(__dirname, "./dist");
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./main.ts"),
  },
  output: {
    path: dist,
    filename: "[name]/index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    compress: false,
    port: 8082,
    host: "0.0.0.0",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html",
      inject: false,
      title: "WebComponent-Lit",
    }),
  ],
};

```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "module": "es6",
    "target": "es6",
    "sourceMap": true,
    "declaration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "strict": true
  },
  "exclude": [
    "node_modules"
  ]
}
```


**package.json scripts**

```json
 "scripts": {
    "start": "webpack-dev-server --config webpack.config.js"
  }
```

# 需要使用lerna管理各个组件

- `lerna init`: 初始化lerna环境, 会创建一个 `lerna.json` 文件
- `lerna add lit`: 添加 `lit` 依赖


