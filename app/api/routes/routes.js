var express = require('express');
var router = express.Router();
//var model = require('../models/schema');
var logger     = require("../../../utils/logger");
var config		 = require('../../../config.js');

router.route('/')
  .get(function(req, res) {
    res.json({Message:"Welcome to the node api template" });
  });

module.exports = router;
