const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const route = require('./routes/route')
app.use(cors());
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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


app.listen(process.env.PORT, () => {
  console.log("server running successfully");
});