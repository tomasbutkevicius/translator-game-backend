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

exports.getAllLanguages = async (req, res) => {
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
}