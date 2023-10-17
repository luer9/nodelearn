const express = require('express')
const app = express()

// middlewave

const mv1 = (req, res, next) => {
    console.log('local1')
    next()
}

const mv2 = (req, res, next) => {
    console.log('local2')
    next()
}
app.get('/', [mv1, mv2], (req, res) => {
    res.send('home page')
})

app.get('/user', (req, res) => {
    res.send('user page')
})

app.listen(80, () => {
    console.log('express server is runnning on http://127.0.0.1')
})