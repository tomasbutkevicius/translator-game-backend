const request = require('request');
var he = require('he');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-key': process.env.KEY,
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    useQueryString: true
  }
};

exports.translate = async (req,res) => {
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
      decodedTransaltion = he.decode(jsonResponse["data"]["translations"][0]["translatedText"]);
      jsonResponse["data"]["translations"][0]["translatedText"] = decodedTransaltion;
      res.send(jsonResponse);
    });
}