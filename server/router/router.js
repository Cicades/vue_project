const express = require('express')
const router = express.Router()

const Carousel = require('../model/carousel.js')

router.get('/', (req, res) => {
	res.send('welcom to vue_project!')
})

module.exports = router