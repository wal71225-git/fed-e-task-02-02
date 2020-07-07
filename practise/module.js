// 直接导出
// export var name = 'foo'
// export function test() {
//     console.log('导出函数')
// }
// export class person {

// }
//统一导出
 var name = 'foo'
 function test() {
    console.log('导出函数')
}
 class person {
    
}
export {
    name as fooname,
    test,
    person
}