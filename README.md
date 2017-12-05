## vue1
> vue1实战项目框架__vue1 + webpack1 + webpack-dev-server + ES6
> 封装组件，增加 view，配置 router
> 按照以下步骤启动成功说明配置成功

---
### 技术架构
* vue1
* webpack1
* webpack-dev-server
* ES6

---
### 依赖模块
* `css-loader` `vue-style-loader`  样式加载

---
### 新建目录及文件
vue1
<pre>
    |-- package.json
    |-- index.html         // 启动页面
    |-- webpack.config.js  // webpack配置文件
    |-- src
        |-- components     // vue组件
        |-- views          // vue页面
        |-- css            // css样式
        |-- main.js        // 入口文件
        |-- router.js      // vue-router配置
        |-- app.vue        // 项目首页组件
</pre>

---
### 安装
1. 克隆项目
```
git clone https://github.com/virgo02014/vue1.git
```

2. 通过`npm`安装本地服务第三方依赖模块(确保已安装[Node.js](https://nodejs.org/))
```
npm install
```

3. 启动服务(http://localhost:8080)
```
npm run dev
```

---
### 需要优化
* 打包发布
* 性能优化
* vuex
