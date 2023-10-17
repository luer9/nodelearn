const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser') // 也是对express.urlencoded({extended:false})的一个封装
const apiRouter = require('./apiRouter.js')
const app = express()

// app.use(express.json()) // 解析json
// app.use(express.urlencoded({extended:false})) // 解析url-encoded格式的请求体数据
app.use(bodyParser.urlencoded({extended: false})) // 解析表单数据（x-www-from-urlencoded）

app.use(cors())
app.use('/api', apiRouter)

app.listen(80, () => {
    console.log('express server is runnning on http://127.0.0.1')
})