const express = require('express')
const bodyParser = require('body-parser')

const router = require('./router/router.js')

const app = express()
//解析请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)

app.listen(8000, () => {console.log('server is running at localhost:8000')})