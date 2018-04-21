var express = require('express');
var router = express.Router();
var request = require('request')
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/', urlencodedParser, function(req, res) {
  const options = {
    url: 'http://api.speedrunners.doubledutchgames.com/GetRanking?id='+ req.body.steamID,
    method: 'GET',
    mode: 'CORS',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  };
  request(options, function(err, response, body) {
    var json = JSON.parse(body);
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.send(json)
      });

});


module.exports = router;
