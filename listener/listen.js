var dbURL = "mongodb://localhost:27017/test"
var mongoClient = require('mongodb').MongoClient;
var database;
mongoClient.connect(dbURL, function(err, db) {
  console.log("Connected correctly to server");
  //circular dependency: export database. Get with app.database
  database = db;
});

setInterval(function(){
	//if(serial)
	value = 0;
	var d = new Date();
	var n = d.getTime();
	database.collection('gsr').insert({'time':n, value:value});
}, 1000);