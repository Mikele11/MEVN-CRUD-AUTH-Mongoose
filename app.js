var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var auth = require('./routes/auth');
var app = express();

app.set('view engine', 'html');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = 'mongodb://Mikele11:face112358@ds259351.mlab.com:59351/vuecrud';
//'mongodb://localhost/mevn-stack-crud'

mongoose.connect('mongodb://Mikele11:face112358@ds259351.mlab.com:59351/vuecrud', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

  
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.
urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/api/auth', auth);
app.use('/book', book);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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