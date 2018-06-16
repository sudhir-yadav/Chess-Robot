'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
	name: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	role: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});
const User = mongoose.model('User', user);
module.exports = User;