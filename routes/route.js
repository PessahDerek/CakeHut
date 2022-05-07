const express = require('express')
const router = express.Router()
const fs = require('fs')
const multer = require('multer')
const {cakeModel} = require('../model/Addbackend')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
const upload = multer({ storage: storage });

router.post("/upload", upload.single("cakeImage"), (req, res) => {  // cakeImage is key and should match
    console.log(req.file.filename)
    const saveCake =  new cakeModel({
      cakeName: req.body.cakeName,
      cakePrice: req.body.cakePrice,
      cakeImage: {
        data: fs.readFileSync("public/" + req.file.filename),
        contentType: "image/png",
      },
    });
    saveCake.save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });
  
  
router.get('/getcakes',async (req,res)=>{
    const allData = await cakeModel.find()
    res.json(allData)
  })


module.exports = router
