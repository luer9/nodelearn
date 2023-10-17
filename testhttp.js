// 导入
const http = require('http')
// 创建实例
const server = http.createServer()

// on 方法绑定 request事件
// req 请求对象，绑定的是与客户端相关的数据或属性
// res 响应对象，访问与服务器相关的数据或属性
server.on('request', (req, res) => {

    console.log('someone visit our web server')

    const url = req.url
    const method = req.method
    const str =  `Your request url is ${url}, and request method is ${method}`
    console.log("request: " + str)

    // .end 向客户端响应一些内容 （中文乱码）
    // res.end("reponse: " + str + " 吧啦吧啦吧啦")

    // 设置响应头，解决中文乱码的问题 Content-type 的值为 text/html; charset=utf-8
    res.setHeader('Content-type', 'text/html; charset=utf-8')
    // 把包含中文的内容，响应给客户端
    res.end("reponse: " + str + " 吧啦吧啦吧啦")
})

// .listen 方法即可启动当前web服务器实例
server.listen(80, () => {
    console.log('http server running at http://127.0.0.1')
})