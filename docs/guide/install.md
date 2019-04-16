# 安装

<br/>

### 兼容性
----
YetUI 基于 Vue.js，不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

### 所需环境
----
在使用 YetUI 时，需要使用 [NPM][2] 进行安装。<br/>
对于中国大陆用户，建议将 NPM 源设置为国内的 [镜像][3]，可以大幅提升安装速度。

### NPM
----
```
npm install yet-ui
```

### 在 main.js 中引用
----
```
import yetUI from 'yet-ui'

Vue.use(yetUI)
```

### Vue Devtools
----
在使用 Vue 时，推荐在浏览器上安装 [Vue Devtools][1]。它允许你在一个更友好的界面中审查和调试 Vue 应用。

[1]: https://github.com/vuejs/vue-devtools#vue-devtools
[2]: https://www.npmjs.com/get-npm
[3]: https://npm.taobao.org/
