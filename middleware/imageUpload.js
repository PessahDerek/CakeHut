const multer = require('multer')
const upload = multer({  // where image is stored on upload
    dist: "../public"
})

exports.uploadImage = upload.single('photo')
  
exports.upload = (req, res) =>{
    console.log(req.body)
    res.status(200).json({
        success: "success"
    })
}
