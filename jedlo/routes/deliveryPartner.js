var express = require('express');
var router = express.Router();
const deliveryPartner = require('../app/controllers/deliveryPartner');
const middle = require('../app/middlewares/api_key');


//router.post('/cash-in-hand',middle,deliveryPartner.cashInHand);     // to get cash in hand



module.exports = router;