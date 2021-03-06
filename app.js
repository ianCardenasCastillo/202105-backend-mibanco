var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var {db: connectdb} = require('./connecdb');

var indexRouter = require('./routes/index');

var destinatarioRouter = require('./routes/destinatario')
var trasnferenciaRouter = require('./routes/transferencia')
var tipoCuentaRouter = require('./routes/tipocuenta')
var usuarioRouter = require('./routes/usuario')
var loginRouter = require('./routes/login')

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/destinatario', destinatarioRouter);
app.use('/api/v1/transferencia', trasnferenciaRouter);
app.use('/api/v1/tipo-cuenta', tipoCuentaRouter);
app.use('/api/v1/usuario', usuarioRouter);
app.use('/api/v1/login', loginRouter);

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
