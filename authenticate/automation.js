var config = require('../config.js');
var https = require('https');
var nodeCache = require( "node-cache" );
var logger = require("../utils/logger");

var tokenCache = new nodeCache();

getAdminToken={
   getAdminToken: function (callback){
     tokenCache.get( "admintoken", function( err, value ){
       if(value){
         logger.info("Admin Token returned from cache");
         callback(value);
        }
       else{
         var adminToken='';
         var payload={
            "auth" : {
              "passwordCredentials" : {
                "username": config.identityUsername,
                "password": config.identityPassword
              }
            }
          };
          var post_options = {
          host: config.identityHost,
          path: config.identityPath,
          port: config.identityPort,
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
            }
          };
          post_data = JSON.stringify(payload);
          post_req = https.request(post_options, function(res) {
          res.setEncoding('utf8');
          var chunkData = '';
          res.on('data', function (chunk) {
              chunkData += chunk;
          });
          res.on('end', function() {
            responseData=JSON.parse(chunkData);
            adminToken = responseData.access.token.id;
            expireTime = responseData.access.token.expires;
            tokenExpireTime = (new Date(expireTime)).getTime() - (new Date()).getTime();
            tokenExpireTime = tokenExpireTime/1000;
            tokenCache.set( "admintoken", adminToken, tokenExpireTime, function( err, success ){
              if( !err && success ){
                logger.info("Token is cached for "+ tokenExpireTime+ " time");
                callback(adminToken);
              }
              else{
                logger.error(err)
              }
            });
          })
        });
        post_req.write(post_data);
        post_req.end();
      }
    });
  }
};

module.exports = getAdminToken;
