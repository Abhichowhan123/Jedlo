var express = require('express');
var router = express.Router();
const restPartner = require('../app/controllers/restaurantPartner');
const middle = require('../app/middlewares/api_key');

// router.use(middle('api_key'));

//router.post('/get-rest-time', middle, restPartner.getRestaurantTime);


module.exports = router;