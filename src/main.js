
/**
 * @file 打包入口文件，在此处通过 import 的内容，来决定components.js中哪些是无用代码
 * 注意这里导入 components 模块时，我们只提取了模块中的 Button 成员，那这就导致components 模块中很多地方都不会被用到，那这些地方就是冗余的。
 */

import { Button } from './components';

document.body.appendChild(Button());