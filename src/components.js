
/**
 * @function 创建button标签
 * 其中 console.log() 语句，很明显永远都不会被执行，所以这个 console.log() 就属于未引用代码。
 */
export const Button = () => {
    return document.createElement('button')
    console.log('dead-code'); // 未引用代码
}

/**
 * @function 创建 a 标签
 */
export const Link = () => {
    return document.createElement('a')
}

/**
 * @function 创建 h 标签
 */
export const Heading = level => {
    return document.createElement('h' + level)
}