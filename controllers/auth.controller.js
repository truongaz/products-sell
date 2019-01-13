module.exports.loginAuth = (req, res, next) => {
	let currentCookie = req.signedCookies;
	if(!currentCookie) {
		res.redirect('/users/login');
		return;
	}
	if(!currentCookie.loginID) {
		res.redirect('/users/login');
		return;
	}

	next();
}