'use strict';
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const cipherSalt = 'asdasu1238239230jdsdjj@##2938jdsodi2e23';

const saltRounds = 10;

/**
 * @name saveUser
 * @description function to save user
 */
const register = (req, res, next) => {
	bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
		req.body.password = hash;
		const user = new User(req.body);
		user.save((err, doc) => {
			if (err) {
				res.send({ success: false, error: err, message: 'Not able to save use, please check params' });
			} else {
				res.send({ sucess: true, data: { user: doc } });
			}
		});
	});
};

/**
 * @name login
 * @description function to login user and send jwt in response for auth routes
 */
const login = (req, res, next) => {
	User.findOne({ username: req.body.username, role: req.body.role }, (err, doc) => {
		console.log(err, doc, req.body, 'user');
		if (err) {
			res.send({ success: false, message: 'Invalid username', err });
		} else if (doc) {
			bcrypt.compare(req.body.password, doc.password, (error, data) => {
				if (error || !data) {
					res.send({ success: false, message: 'Invalid password', err: error });
				} else {
					const token = jwt.sign(doc, cipherSalt, {
						expiresIn: 144000000000
					});
					res.send({ success: true, message: 'Successfully logged In', user: doc, token });
				}
			});
		} else {
			res.send({ success: false, message: 'Invalid username', err });
		}
	});
};
module.exports = {
	register,
	login
};