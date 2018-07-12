var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var config = require('./config.js');
var request = require('request');
var logger = require("./utils/logger");
var authenticate = require("./authenticate/authenticate.js");
var apiRoute     = require("./app/api/routes/routes");
var items = require("./app/api/routes/items");
var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

mongoose.connect(config.mlabdb, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  console.log('error connecting to database!!');
});

mongoose.connection.once('open', () => {
  console.log('finally connected');
});

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  logger.info(req.originalUrl);
  next();
  // if (req.originalUrl.indexOf('/') > -1) {
  //   // authenticate.authenticate(req.headers['x-auth-token'], function(ret) {
  //   //   if (ret) {
  //   //     next();
  //   //   }
  //   //   else {
  //   //     res.status(404)
  //   //     logger.error('Invalid Token');
  //   //     res.json({
  //   //       errormessage: 'Invalid Token'
  //   //     });
  //   //   }
  //   // });
  // }
  // else {
  //   next();
  // }
});

app.get('/', function(req, res) {
  console.log('hello world');
  res.json('Hello World!');
});

app.use('/test', apiRoute);
app.use('/items', items);

var server = app.listen(config.listenPort, function() {
  var host = server.address().address;
  var port = server.address().port;
  logger.info('API listening at http://%s:%s', host, port);
});
