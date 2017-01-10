if (process.env.NODE_ENV === 'development') {
  require('dotenv').config(); // Load .env
}
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const session = require('express-session');
var cors = require('cors');
const passport = require('passport');

const User = require('./models/User');

var index = require('./routes/index');
const auth = require('./routes/auth');
//var users = require('./routes/users');
var jobs  = require('./routes/jobs');
var jobtypes  = require('./routes/jobtypes');
var cities = require('./routes/cities');
var profiles = require('./routes/profiles');
//var counterRouter = require('./routes/counter');
//var countersRouter = require('./routes/counters');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*'
}));
// Passport + User
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Express + Passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/auth', auth);
//app.use('/users', users);

app.use('/jobs', jobs);
app.use('/jobtypes', jobtypes);
app.use('/cities', cities);
app.use('/profiles', profiles);
//app.use('/counter', counterRouter);
//app.use('/counters', countersRouter);

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
