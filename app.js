var express = require('express');
var ejs = require('ejs');
var DVDController = require('./controllers/DVDController');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Home'
    });
});

app.get('/dvds', DVDController.dvds);

app.listen(3000, function () {
    console.log('Listening to 3000');
});