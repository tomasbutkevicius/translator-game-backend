const express = require("express");
const router = express.Router();
const request = require('request');
var zlib = require('zlib');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': process.env.KEY,
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    useQueryString: true
  }
};

router.post("/", async (req, res) => {
  options.form = req.body;
  request(options, function (error, response, body) {
    if (error) {
      res.send(error);
      return;
    }
    jsonResponse = JSON.parse(body);
    if (jsonResponse.error) {
      res.status(jsonResponse.error.code).send(jsonResponse);
      return;
    }
    
    res.send(jsonResponse);
  });
});

module.exports = router;