// 1. 导入express
const express = require('express')
// 2. 创建web服务器
const app = express()

// 4. 监听请求
app.get('/user', (req, res) => {
    res.send({name: 'aa', age: 20, gender: 'girl'})
})
app.post('/user', (req, res) => {
    res.send('post请求成功')
})

app.get('/', (req, res) => {

    console.log(req.query)
    res.send(req.query)
})

// :id是一个动态的参数
app.get('/user/:id', (req, res) => {

    console.log(req.params)
    res.send('id: ' + req.params['id'])
})

app.get('/user/:id/:name', (req, res) => {

    console.log(req.params)
    res.send('id: ' + req.params['id'] + ' ' + req.params['name'])
})

// 3. 调用listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80, ()=> {
    console.log('express server running at http://127.0.0.1')
})