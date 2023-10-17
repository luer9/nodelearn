const express = require('express')
const app = express()

// middlewave
 
app.get('/', (req, res) => {
    throw new Error('server error')
    res.send('hello: ' )
})

app.get('/user/list', (req, res) => {
    res.send('Get user list: ' )
})

// 定义错误级别的中间件，捕获整个项目的异常错误，防止程序的崩溃
// 错误级别的中间件，必须注册在所有路由之后
app.use((err, req, res, next) => {
    console.log('发生了崩溃! ' + err.message)
    res.send('ERR: ' + err.message )
})
 

app.listen(80, () => {
    console.log('express server is runnning on http://127.0.0.1')
})