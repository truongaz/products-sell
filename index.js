const express = require('express');
const app = express();
const port = 9000;
const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();
const auth = require('./controllers/auth.controller.js')

const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.SECRETCOOKIE));

const Users = require('./model/users.model.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:/reCoded', {useNewUrlParser: true});

const userRouter = require('./routes/user.router.js');

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.render('index.pug');
});

app.use('/public', auth.loginAuth ,express.static('./publics'));
app.use('/users', userRouter);

app.listen(port, console.log('Server on listen at', port));

