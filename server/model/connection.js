const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vue_project', {useNewUrlParser: true})
const conn = mongoose.connection
conn.on('erro', console.log.bind(console, '数据库链接失败！'))
conn.on('open', console.log.bind(console, '数据库链接成功！'))

module.exports = mongoose
