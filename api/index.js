
const express = require('express')
const app = express()

const hello = require('./hello')
app.use(hello)

module.exports = app