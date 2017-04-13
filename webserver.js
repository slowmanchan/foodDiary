var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.listen(3000, function() {
  console.log("Server Started on Port 3000")
});
