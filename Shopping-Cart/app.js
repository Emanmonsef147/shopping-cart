var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose =require('mongoose');
const expresshbs=require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const expressvalidtor=require('express-validator');
const session=require('express-session');
const flash=require('connect-flash');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.engine('.hbs' ,expresshbs({defaultLayout:'layout' ,extname:'.hbs',handlebars: allowInsecurePrototypeAccess(Handlebars)}))
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'shoppinf-cart_?@!',
  saveUninitialized:false,
  resave:false,
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect('mongodb://localhost/node-project' ,{ useNewUrlParser: true },(err)=>{
  if (err) {
    console.log(err)
  } else {
    console.log("connect to DB.........")
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);

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
