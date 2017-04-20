var express = require('express');
var morgan = require('morgan');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var db;

var app = express();


app.use(express.static(path.join(__dirname, 'static')));

app.post('/', function(req, res, next) {
  console.log(req);
  next();
});

MongoClient.connect('mongodb://localhost/foodsdb', function(err, dbConnection) {
  assert.equal(null, err);
  console.log('Connected to Mr. Mongo');
  db = dbConnection;
  app.listen(3000, function() {
    console.log("Arrrr matey, the server has started on ye port 3000")
  });
});
