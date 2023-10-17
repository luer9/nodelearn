const express = require('express')

const app = express()

// 调用express.static方法，快速对外提供静态资源
// app.use(express.static('clock'))
app.use('/abb', express.static('clock'))
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})