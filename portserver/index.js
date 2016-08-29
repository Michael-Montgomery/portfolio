//server requirements/dependencies
var express = require('express');
var cors = require('cors');
var ejs = require('ejs');
var bodyPasrer = require('body-parser');
var path = require('path');

var app = express();

var mainRoute = require('./routes/main.route.js');

//Middleware declarations

app.use(cors());
app.use(bodyPasrer.json());
app.use(bodyPasrer.urlencoded({extended: false}));





//Set up public files

app.use(express.static(path.join(__dirname + "/public")));
app.set("views", __dirname + "/public/views");

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(mainRoute);

console.log('initialized');
app.listen(8080);