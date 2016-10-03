var express = require('express');
//var session = require('express-session');
var mongoClient = require('mongodb').MongoClient;

var app = express();

app.set('view engine','ejs');
app.use(express.static('static'));

app.get('/', function(req, res){
	res.send("Bro this is cool.");
});

app.get('/shata', function(req, res){
	res.render('home');
});

app.listen(8080, function(){
	console.log('Server running on port 8080.');
});
