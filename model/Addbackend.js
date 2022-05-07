const mongoose = require('mongoose')

const ourCakes = new mongoose.Schema({
    cakeName: {
        type: String,
        required: true
    },
    cakePrice: {
        type: String,
        required: true
    },
    cakeImage: {
        data: Buffer,
        contentType: String,
    }
});

module.exports = cakeModel = mongoose.model("cakes", ourCakes)