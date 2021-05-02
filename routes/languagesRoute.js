const express = require("express");
const router = express.Router();
const request = require('request');

const options = {
    method: 'GET',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    headers: {
      'accept-encoding': 'application/gzip',
      'x-rapidapi-key': process.env.KEY,
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      useQueryString: true
    }
  };

router.get("/", async (req, res) => {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        res.send(body);
    });
});

module.exports = router;