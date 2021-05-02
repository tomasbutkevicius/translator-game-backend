const express = require("express");
const app = express();
require('dotenv/config');

const translateRoute = require('./routes/translateRoute');
const languagesRoute = require('./routes/languagesRoute');


app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, secret");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use("/translate", translateRoute);
app.use("/languages", languagesRoute);

module.exports = app;