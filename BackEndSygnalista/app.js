var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();
var cors = require('cors');
app.use(cors());
var port = 3000;

app.get('/api/test', (req, res) => {
    res.send({dupa:"asdasd"})
  })
  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../FrontEndSygnalista/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
