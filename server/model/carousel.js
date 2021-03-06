const mongoose = require('./connection.js')

const carouselSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true
	}
})

const Carousel = mongoose.model('carousel', carouselSchema)

module.exports = Carousel