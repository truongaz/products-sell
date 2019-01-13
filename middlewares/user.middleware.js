const mongoose = require('mongoose');
const Users = require('../model/users.model.js');
const md5 = require('md5');

module.exports.userCheck = async (req, res, next) => {
	let validatedData = res.locals.validatedData;
	let errors = [];

	let user = await Users.findOne({email: validatedData.email});

	if(!user) {
		errors.push('Incorrect email.');
		res.render('user/login.pug', {
			errors: errors
		});
		return;
	}

	if(user.email !== validatedData.email)
		errors.push('Incorrect email');

	if(user.pw !== md5(validatedData.pw))
		errors.push('Wrong password.');

	if(errors.length){
		res.render('user/login.pug', {
			errors: errors
		});
		return;
	}

	let userLogin = user;
	next();
	return;
}