const shortid = require('shortid');
const UserModel = require('../model/users.model.js');
const hashPW = require('md5');

// bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = data.pw;
// const someOtherPlaintextPassword = 'not_bacon';

module.exports.index = (req, res, next) => {
	res.render('user/index.pug');
}

module.exports.login = (req, res, next) => {
	res.render('user/login.pug');
	next();
}

module.exports.postLogin = (req, res, next) => {
	res.cookie('loginID', shortid.generate(), {signed: true});
	res.send('Successful');
}

module.exports.postCreate = (req, res, next) => {
	let data = res.locals.validatedData;
	let avatar = req.file || '';
	(avatar)? data.avatar = avatar.path.split('/').splice(1).join('/'): undefined;

	data.pw = hashPW(data.pw);
	
	UserModel.create(data, (err, success) => {
		if(err){
			res.send("An error has occured!");
		}

		res.redirect('/users/login');
		next();
	});

}

module.exports.create = (req, res, next) => {
	res.render('user/create.pug');
	next();
}