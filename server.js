const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const route = require('./routes/route')
const dotenv = require('dotenv')
dotenv.config()

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(bodyParser.json({limit: '10mb'}));
app.use('/app', route)

mongoose.connect(
    process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database Connected successfully"))
  .catch((err) => console.log("it has an error", err));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors())
app.listen(process.env.PORT, () => {
  console.log("server running successfully");
});