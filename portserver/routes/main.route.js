var express = require('express');

var mainRouter = express.Router();

mainRouter.get('/', function(req, res) {
    console.log('endpoint hit!');
    res.render('index.html')
});

console.log('main route hit');

module.exports = mainRouter;

