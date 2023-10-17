// 得到的是module.exports指向的对象
const module2 = require('./module2')

// 导入的结果，永远以module.exports指向的对象为准。
console.log(module2)

console.log('============')
console.log(module.exports)
console.log(exports)
console.log(exports === module.exports) // true