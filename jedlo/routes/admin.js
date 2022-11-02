var express = require('express');
var router = express.Router();
const admin = require('../app/controllers/admin');
const middle = require('../app/middlewares/api_key');


//router.post('/delivery_user_revenue', middle, admin.validateDeliveryUserRevenue,admin.DeliveryUserRevenue); 


module.exports = router;