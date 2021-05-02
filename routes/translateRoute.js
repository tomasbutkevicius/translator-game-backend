const express = require("express");
const router = express.Router();
const request = require('request');

const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'accept-encoding': 'application/gzip',
      'x-rapidapi-key': process.env.KEY,
      'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
      useQueryString: true
    },
    form: {q: 'Hello, world!', target: 'es', source: 'en'}
  };

router.post("/", async (req, res) => {
    options.form = req.body;
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
    
        res.send(body);
    });
});

module.exports = router;