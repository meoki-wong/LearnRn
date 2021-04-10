const express = require('express')
const app = new express()
const main = require('./router/main')

// 端口号
const port = 8777

app.use('/api', main)

// 
app.listen(port, (res)=>{
    console.log(`=====在${port}端口上启动了=====`)
})
