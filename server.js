var express = require ('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var Savehere = require('../routers/Savehere');

var app = express();

app.use(morgan());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/', Savehere);

app.listen(9000, function () {
  console.log('astronaut listening on port 9000');
};
