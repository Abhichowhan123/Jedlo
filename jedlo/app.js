var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer();

var logger = require('morgan');
const dotenv = require('dotenv').config({path:__dirname+'/.env'});


var v1CustomersApiRouter = require('./routes/customers_v1');
var restPartner = require('./routes/restaurantPartner');
var deliveryPartner = require('./routes/deliveryPartner');
var admin = require('./routes/admin');
/*var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

var app = express();

//set timezone
process.env.TZ = "Asia/Kolkata";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json()); // for parsing application/json
app.use(upload.array()); // for parsing multipart/form-data

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/customers', v1CustomersApiRouter);
app.use('/api/v1/restaurantPartner', restPartner);
app.use('/api/v1/deliveryPartner', deliveryPartner);
app.use('/api/v1/admin', admin);
/*app.use('/', indexRouter);
app.use('/users', usersRouter);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
