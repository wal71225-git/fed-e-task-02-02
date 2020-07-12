 const markd = require('marked')
//使用import ,需要使用babel转义
//import markd from 'markd'
module.exports = source => {
    console.log(source)
    const html = markd(source)
    console.log('html',html)
    // 第一种方式直接导出javascript字符串
    //return `module.exports = ${ JSON.stringify(html) }`
    //return `export default ${ JSON.stringify(html) }`
    // 第二种方式返回字符串，并使用其它loader转换
    return `export default JSON.stringify(html)`
}