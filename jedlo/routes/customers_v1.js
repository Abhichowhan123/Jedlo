var express = require('express');
var router = express.Router();
var cors = require('cors')
const helmet = require('helmet')
const { body } = require('express-validator');
const cntlr = require('../app/controllers');

function ctrl(controller){
	return require('../app/controllers/'+controller);
}

function mw(middleware){
	return require('../app/middlewares/'+middleware);
}

/** check api key */
router.use(mw('api_key'));

//router.post('/login', ctrl('auth.controller').validateLogin, ctrl('auth.controller').login);





module.exports = router;
