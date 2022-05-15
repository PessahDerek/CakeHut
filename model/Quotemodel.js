const mongoose = require('mongoose')

const quoteModel = new mongoose.Schema({
    cakeType: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true,
    },
    customerContact: {
        type: String,
        required: true
    }
})

const quote_model = mongoose.model('quote_request', quoteModel)

module.exports = quote_model;
