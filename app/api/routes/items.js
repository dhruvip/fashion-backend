var express = require('express');
var router = express.Router();
var item = require('../models/items');
var logger     = require("../../../utils/logger");
var config		 = require('../../../config.js');
/**  STANDARD RESPONSE TEMPLATE
 var response = {};
	if (!err) {
		response.data = doc;
		logger.info('response: ', response);
		response.dataCount = response.data.length;
		res.json(response);
	} else {
		response = { error_code: 400, message: 'Error reading data', error: err };
		logger.error('response: ', response);
		res.status(response.error_code);
		res.json(response);
	}
*/
router.route('/')
	.get(function(req, res) {
		res.json({Message:"Welcome to the ITEM Route" });
	});

router.route('/add')
	.post((req, res) => {
		if (req.body) {
			(new item(req.body)).save((err, doc) => {
				var response = {};
				if (!err) {
					response.data = doc;
					logger.info('response: ', response);
					response.dataCount = response.data.length;
					res.json(response);
				} else {
					response = { error_code: 400, message: 'Error reading data', error: err };
					logger.error('response: ', response);
					res.status(response.error_code);
					res.json(response);
				}
			});
		}
	});

router.route('/read')
.post((req, res) => {
	var response = {};
	if (req.body) {
		item.find(req.body, (err, docs) => {
			if (!err) {
				response.data = docs;
				logger.info('response: ', response);
				response.dataCount = response.data.length;
				res.json(response);
			} else {
				response = { error_code: 400, message: 'Error reading data', error: err };
				logger.error('response: ', response);
				res.status(response.error_code);
				res.json(response);
			}
		});
	} else {
		response = { error_code: 400, message: 'Request Body is empty', error: err };
		logger.error('response: ', response);
		res.status(response.error_code);
		res.json(response);
	}
});

module.exports = router;