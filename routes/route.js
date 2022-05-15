const express = require('express')
const router = express.Router()
const fs = require('fs')
const multer = require('multer')
const { type } = require('os')
const mongoose = require('mongoose')
const cakeModel = require('../model/cakeModel')
const order_Model = require('../model/orderModel')
const eventCakes = require('../model/eventCakeModel')
const quote_model = require('../model/Quotemodel')
const { send } = require('process')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
      console.log(file.originalname)
    },
  });

const upload = multer({ storage: storage, limits: { fieldSize: 25 * 1024 * 1024 }});

router.post("/upload", upload.single("cakeImage"), async(req, res) => {  // cakeImage is key and should match
    console.log('xxx')
    const saveCake = await new cakeModel({
      cakeName: req.body.cakeName,
      cakePrice: req.body.cakePrice,
      cakeImage: "./public/" + req.file.filename
    });
    saveCake.save()
      .then((res) => {
        console.log("this is ", res);
      })
      .catch((err) => {
        console.log(err, "error has occured");
      });
      res.send('image is saved')
  });

router.post("/category", upload.single("cakeImage"), async(req, res) => {  // cakeImage is key and should match
  const saveCake = await new eventCakes({
    cakeName: req.body.cakeName,
    cakePrice: req.body.cakePrice,
    cakeImage: {
      data: fs.readFileSync("./public/" + req.file.filename),
      contentType: "image/png"
    }
  });
  console.log(req.file.filename)
  /**saveCake.save()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err, "error has occured");
    });
    res.send('image is saved in Event Cakes')*/
});

router.post('/placeorder', async (req, res)=>{
  const saveOrder = await new order_Model({
    cake: req.body.cake,
    price: req.body.price,
    pickOrDeliv: req.body.deliv,
    location: req.body.location,
    date: req.body.expecDate,
    details: req.body.extraInfo,
    customer: req.body.name,
    phone: req.body.phone,
  })
  saveOrder.save()
    .then((res)=>{
      res.send(res);
    })
    .catch((err)=>{
      res.send("Sorry, Something Went Wrong!!")
    });
})

router.get('/getpending', async (req, res)=>{
  try {
    const orders = await order_Model.find()
    res.send(orders)
  } catch (error) {
    console.log(error)
  }
})
  
  
router.get('/getcakes',async (req,res)=>{
    const allData = []
    const our_cakes = await cakeModel.find()
    const event_cakes = await eventCakes.find()
    allData.push(our_cakes)
    allData.push(event_cakes)
    res.json(allData)
  })

router.post('/getquote', async (req, res)=>{
  try {
    const quoteReq = new quote_model({
      cakeType: req.body.cake,
      customerName: req.body.customerName,
      customerContact: req.body.customerContact
    })
    quoteReq.save()
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        res.send("Sorry Try Again")
      })
      res.send("Quote Received")
  } catch (error) {
    console.log('this is the error: ', error)
  }
})
router.get('/fetchquotes', async (req, res)=>{
  try {
    const quotes = await quote_model.find()
    res.send(quotes)
  } catch (error) {
    res.send("Error Occured in fetching quote")
  }
})


module.exports = router
