var express = require('express');
var router = express.Router();
var cors = require('cors')
const helmet = require('helmet')

function ctrl(controller){
	return require('../app/controllers/'+controller);
}

function mw(middleware){
	return require('../app/middlewares/'+middleware);
}

/** check api key */
router.use(mw('api_key'));


module.exports = router;
