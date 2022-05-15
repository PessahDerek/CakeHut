const mongoose = require('mongoose')

const EventCakes = new mongoose.Schema({
    cakeName: {
        type: String,
        required: true
    },
    cakePrice: {
        type: String,
        require: false
    },
    cakeImage: {
        type: String
    }
})

const eventCakes = mongoose.model("EventCakes", EventCakes)

module.exports = eventCakes
