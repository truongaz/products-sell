module.exports.loginValidate = (req, res, next) => {
	let data = req.body || '';
	let errors = [];
	
	if(!data) {
		errors.push('No data inputed.');
	}
	if(!data.email){
		errors.push('Email is  required!');
	}
	if(!data.pw){
		errors.push('Password is required!');
	}

	if(errors.length){
		res.render('user/login.pug', {
			errors: errors
		});
		return;
	}
	
	res.locals.validatedData = data; 
	next();
}

module.exports.createValidate = (req, res, next) => {
	let data = req.body || '';
	let errors = [];
	
	if(!data){
		errors.push('No data inputed.');
	}

	if(!data.email) {
		errors.push('Email is  required!');
	}

	if(!data.pw) {
		errors.push('Password is required!');
	}
	
	if(!data.name) {
		errors.push('Name is required!');
	}

	if(errors.length){
		res.render('user/create.pug', {
			errors: errors
		});
		return;
	}
	
	res.locals.validatedData = data; 
	next();
}