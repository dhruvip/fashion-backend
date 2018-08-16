var express = require('express');
var router = express.Router();
var product = require('../models/products');
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
		res.json({Message:"Welcome to the products Route" });
	});

router.route('/add')
	.post((req, res) => {
		if (req.body) {
            //logic for generating auto unique ID goes here
			(new product(req.body)).save((err, doc) => {
				var response = {};
				if (!err) {
					response.data = doc;
					logger.info('response: ', response.status);
					response.dataCount = response.data.length;
					res.json(response);
				} else {
					response = { error_code: 400, message: 'Error reading data', error: err };
					logger.error('response: ', response.status);
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
			product.find(req.body, (err, docs) => {
				if (!err) {
					response.data = docs;
					logger.info('response: ', response.status);
					response.dataCount = response.data.length;
					res.json(response);
				} else {
					response = { error_code: 400, message: 'Error reading data', error: err };
					logger.error('response: ', response.status);
					res.status(response.error_code);
					res.json(response);
				}
			});
		} else {
			response = { error_code: 400, message: 'Request Body is empty', error: err };
			logger.error('response: ', response.status);
			res.status(response.error_code);
			res.json(response);
		}
	});

router.route('/delete')
	.post((req, res) => {
		var response = {};
		if (req.body) {
			var query = {
				'_id': req.body['_id']
			};
			product.deleteOne(query, (err) => {
				if (!err) {
					logger.info('response: ', response.status);
					response.status = 200;
					response.message = "Deleted Successfully: ID :" + query['_id'];
					res.json(response);
				} else {
					response = { error_code: 400, message: 'Error reading data', error: err };
					logger.error('response: ', response.status);
					res.status(response.error_code);
					res.json(response);
				}
			})
		} else {
			response = { error_code: 400, message: 'Request Body is empty', error: err };
			logger.error('response: ', response.status);
			res.status(response.error_code);
			res.json(response);
		}
	});
module.exports = router;