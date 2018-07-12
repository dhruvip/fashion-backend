var config		 = require('../config.js');
var request = require('request');
var automation = require('./automation');
var logger = require("../utils/logger");

var authenticate = {
  authenticate: function (token, callback){
    var xAuthToken = token;
    automation.getAdminToken(function (xAuth) {
      var options = {
        url: config.identityURL+xAuthToken,
        headers: {
          'Content-Type' : 'application/json',
          'X-Auth-Token' : xAuth
        }
      };
      request(options, function (error, response, body) {
        callback(!error && response.statusCode == 200);
      });
    });
  }
};

module.exports = authenticate;
