
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @file Tree Shaking 翻译过来的意思就是“摇树”。伴随着摇树的动作，树上的枯树枝和树叶就会掉落下来。
 * 我们这里要介绍的 Tree-shaking 也是同样的道理，不过通过 Tree-shaking “摇掉”的是代码中那些没有用到的部分，这部分没有用的代码更专业的说法应该叫作未引用代码（dead-code）。
 * Tree-shaking 最早是 Rollup 中推出的一个特性，Webpack 从 2.0 过后开始支持这个特性。
 * 我们使用 Webpack 生产模式打包的优化过程中，就使用自动开启这个功能，以此来检测我们代码中的未引用代码，然后自动移除它们。
 * 
 * 说明：
 * 1、需要注意的是，Tree-shaking 并不是指 Webpack 中的某一个配置选项，而是一组功能搭配使用过后实现的效果，这组功能在生产模式下都会自动启用，所以使用生产模式打包就会有 Tree-shaking 的效果。
 * 2、Webpack 的 Tree-shaking 特性在生产模式（production）下会自动开启。打包完成以后我们打开输出的 main.bundle.js 发现：1）未被引用的方法；2）被引用的方法中始终不会执行的代码；都被剔除掉了。
 * 3、将mode设置为 none 时，也就是不开启任何内置功能和插件。打包完成过后，我们再次找到输出的 bundle.js 文件。虽然外部没有使用这里的 Link 函数和 Heading 函数，但是仍然导出了它们。
 * 
 */

let config = {
  entry: {
    /**
     * @description entry为一个对象，每个属性名代表一个入口，属性值为入口js文件的地址，打包结果是相应的生成多套文件；
     * 当entry为数组时，表示将数组的所有文件打包为一个文件；
     */
    main: './src/main.js',
  },
  output: {
    filename: '[name].bundle.js', // 指定输出的文件名，[name]会被替换为entry的属性名
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}


/**
 * mode:这个属性有三种取值，分别是 production、development 和 none。
 * 1. production 生产模式下，Webpack 会自动优化打包结果；
 * 2. development 开发模式下，Webpack 会自动优化打包速度，添加一些调试过程中的辅助；
 * 3. None 模式下，Webpack 就是运行最原始的打包，不做任何额外处理；
 */
module.exports = (env, argv) => {
  console.log({
    env,
    argv,
  });
  if (env === 'development') {
    return merge(config, {
      mode: env,
    });
  } else {
    return merge(config, {
      mode: env,
    });
  }
}
