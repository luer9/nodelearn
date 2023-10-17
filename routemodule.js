const express = require('express')
const userRouter = require('./router1.js')
const app = express()

// app.use(userRouter)

app.use('/api' ,userRouter)


app.listen(80, ()=>{
    console.log('express server is runnning on http://127.0.0.1')
})