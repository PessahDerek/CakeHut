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
        type: String
    }
});




const cakeModel = mongoose.model("cakes", ourCakes)

module.exports = cakeModel
