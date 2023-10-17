// 自定义模块
// 默认情况下，module.exports = {}


// 挂载属性
module.exports.username = 'lulu'

// 挂载方法
module.exports.sayHello = () => {
    console.log('おはよう')
}

// 挂载对象
exports = {
    name: 'haha',
    sayhi() {
        console.log("hihihi")
    }
}
