var express = require('express')
var mongoose = require('mongoose');
var server = require('http').createServer(app);// to create the server
var port = process.env.PORT || 3000;//this to choises help in deploy
var app = express();


require('./config/middleware.js') (app,express); //connect to middleware functions
require('./config/routes.js') (app,express); //connect to routes 

/////////////////////database//////////////////////////
var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/To_DoDB';
  mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once('open',function () {
	console.log('mongoDB is open');
});


////////////////////server////////////////////////////
app.listen(port, function () {
  console.log(' app listening on port 3000!');//
})