const mongoose = require('mongoose')


const orderModel = new mongoose.Schema({
    cake: {type: String, required: true},
    price: {type: Number, required: true},
    pickOrDeliv: {type: String, required: true},
    location: {type: String, required: true},
    date: {type: String, required: true},
    details: {type: String},
    customer: {type:String, required: true},
    phone: {type: String, required: true},
})


const order_Model = mongoose.model("order", orderModel)

module.exports = order_Model
