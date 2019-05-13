var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var index = require('./app_server/routes/index');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('mongodb://topUniversity:topuniversity1@ds119449.mlab.com:19449/worldrank');

var app = express();

//View engine setup

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//set up mongodb
app.use(function(req,res,next){
    req.db = db;
    next();
});

db.catch(function(err){
	console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(session( {secret: "String for encrypting cookies." } ));



app.use('/', index);

module.exports = app;
app.listen(3000);