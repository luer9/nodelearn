const express = require('express')
const router = express.Router()



// 挂载对应的路由

// 编写get接口
router.get('/get', (req, res) => {
    
    const query = req.query

    res.send({
        status: 0,  // 状态
        msg: 'GET request success', // 状态描述
        data: query // 需要响应给客户端的具体数据
    })
})

// 编写post接口
router.post('/post', (req, res) => {
    // body数据
    const body = req.body
    // 如果要获取url-encoded格式的请求体数据，必须配置中间件 express.urlencoded({extended: false})
    // 如果要解析表单数据需要使用body-parser中间件
    res.send({
        status: 0,
        msg: 'POST request success', // 状态描述
        data: body // 需要响应给客户端的具体数据
    })
})

module.exports = router