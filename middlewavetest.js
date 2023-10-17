const express = require('express')
const app = express()

// middlewave

const mw = (req, res, next) => {
    console.log('---------> mw1')
    // 获取请求到达服务器的时间
    const time = Date.now()
    // 为req对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time
    // 把流转关系，转交给下一个中间件或路由
    next()
}
// 注册全局生效的中间件
app.use(mw)

app.get('/', (req, res) => {
    res.send('hello: ' + req.startTime)
})

app.get('/user/list', (req, res) => {
    res.send('Get user list: ' + req.startTime)
})


app.listen(80, () => {
    console.log('express server is runnning on http://127.0.0.1')
})