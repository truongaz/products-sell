const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');
const userValidate = require('../validate/user.validate.js');
const userMiddleware = require('../middlewares/user.middleware.js');

router.get('/', userController.index);

const multer = require('multer');
const upload = multer({ dest: 'publics/uploads'});

// login include: email, password
router.get('/login', userController.login);
router.post('/login', userValidate.loginValidate, userMiddleware.userCheck, userController.postLogin);

router.get('/create', userController.create);
router.post('/create', 
	upload.single('avatar'), 
	userValidate.createValidate, 
	userController.postCreate
);


module.exports = router;