const express = require("express");
const router = express.Router();
const request = require('request');

const options = {
    method: 'GET',
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru',
    headers: {
      'accept-encoding': 'application/json',
    }
  };

router.get("/", async (req, res) => {
    request(options, function (error, response, body) {
      if (error){
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