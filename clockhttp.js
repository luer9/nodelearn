const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    // 客户端的url地址
        // /clock/index.html
         // /clock/index.css
          // /clock/index.js
    const url = req.url
    // 将请求的url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url)
    let fpath = ''
    if(url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    }else {
        // /index.html
        // /index.css
        // /index.js
        fpath = path.join(__dirname, './clock', url)
    }

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    fs.readFile(fpath, 'utf-8', (err, data) => {
        if(err) {
            return res.end("404 not found")
        }
        res.end(data)
    })
})

server.listen(80, ()=> {
    console.log('http server running at http://127.0.0.1')
})