var dbURL = "mongodb://localhost:27017/test"

var express = require('express');
//var session = require('express-session');
var mongoClient = require('mongodb').MongoClient;
var database;
mongoClient.connect(dbURL, function(err, db) {
  console.log("Connected correctly to server");
  //circular dependency: export database. Get with app.database
  database = db;
});

var app = express();

app.set('view engine','ejs');
app.use(express.static('static'));

app.get('/', function(req, res){
	res.render('index');
});

app.get('/test', function(req, res){
	res.render('test');
});

app.get('/testing', function(req, res){
	if(req.query.id){
		database.collection('collection').find({'completed':0}).toArray(function(err, docs){
			console.log(docs);
			res.send(docs);
		});
	}
	else
		res.render('testing');
});

app.get('/chart', function(req, res){
	res.render('chart');
});



app.listen(8080, function(){
	console.log('Server running on port 8080.');
});
