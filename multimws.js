const express = require('express')
const app = express()

// middlewave
 
// 注册全局生效的中间件 1 2 3
app.use((req, res, next) => {
    console.log('---------> mw1')
    next()
})
app.use((req, res, next) => {
    console.log('---------> mw2')
    next()
})
app.use((req, res, next) => {
    console.log('---------> mw3')
    next()
}
)

app.get('/', (req, res) => {
    res.send('hello: ' )
})

app.get('/user/list', (req, res) => {
    res.send('Get user list: ' )
})


app.listen(80, () => {
    console.log('express server is runnning on http://127.0.0.1')
})