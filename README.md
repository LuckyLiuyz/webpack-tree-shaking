# webpack-tree-shaking

探索 webpack 的 tree shaking 机制。

## 对比有无 tree shaking，打包输出的结果。

```
通过执行不同的webpack配置文件，针对不同功能点进行打包
- `npm run build-production` 命令，用于验证生产环境下，tree shaking 后打包输出的结果；
- `npm run build-development` 命令，用于验证开发环境下，无 tree shaking 打包输出的结果；
```

### 相关说明

![blockchain]("webpack配置文件与打包生成文件之间的关系")
![blockchain]("自动引入公共打包的代码")

## 其他
