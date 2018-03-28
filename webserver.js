var express = require('express');
var morgan = require('morgan');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var db;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'static')));

app.post('/', function(req, res, next) {
  db.collection('foodList').insertOne(req.body, function(err, result) {
    assert.equal(null, err);
    db.collection('foodList').find({_id: result.insertedId}).limit(1).next(function(err, doc) {
      assert.equal(null, err);
      res.json(doc);
    });
  });
});

app.get('/api/food-logs', function(req, res, next) {
  db.collection('foodList').find({}).toArray(function(err, result) {
    res.json(result);
  })
})

MongoClient.connect('mongodb://heroku_nmx8ntgb:2m3nfbkcghfkm4uuot0aulchhp@ds127129.mlab.com:27129/heroku_nmx8ntgb', function(err, dbConnection) {
  assert.equal(null, err);
  console.log('Connected to Mr. Mongo');
  db = dbConnection;
  app.listen(process.env.PORT || 3000, function() {
    console.log("Arrrr matey, the server has started on ye port 3000")
  });
});
