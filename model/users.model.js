const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
	email: {type:String, required: true},
	pw: {type:String, required: true},
	name: {type:String, required: true},
	phone: {type:String, default: ''},
	avatar: {type: String, default: 'publics/upload/defaultUser.jpg'}
});

var Users = mongoose.model('users', usersSchema);

module.exports = Users;