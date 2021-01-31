const port = 3003

const bodyParser = require('body-parser')

// singleton to create express
const express = require('express')
const server = express()
const cors = require('./cors')

// all request will pass for the middleware body parser
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, function(){
    console.log(`MyMoneyManager - Backend - running on port ${port}.`)
})

module.exports = server
