module.exports = {
  // 开启 Eslint
  lintOnSave: true,
  // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
  // 当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
  // 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取。
  css: {
    extract: false,
    loaderOptions: {
      // 为 sass 设置全局的变量、mixin或 function
      // 将 sass 代码放在实际的入口文件(entry file)之前，可以设置 data 选项。
      // 此时 sass-loader 不会覆盖 data 选项，只会将它拼接在入口文件的内容之前。
      // 当 sass 变量依赖于环境时，这一点尤其有用
      sass: {
        data: `@import "./src/styles/common.scss";`
      }
    }
  },
}
