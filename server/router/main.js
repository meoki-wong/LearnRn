const express = require('express')

const main  = express.Router()

main.get('/login', (req,res)=>{
    res.send('hello router')
})


module.exports = main