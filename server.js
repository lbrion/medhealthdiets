var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var fs = require('fs');
var AWS = require('aws-sdk');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//GET home page.
app.get('/', function (req, res) {
  res.render('index', { appTitle: 'MedHealthDiets: your source for medical diet information' });
});

app.get('/diets', function (req, res) {
  res.render('diets', { appTitle: 'MedHealthDiets: your source for medical diet information' });
});

app.get('/about', function (req, res) {
  res.render('about', { appTitle: 'MedHealthDiets: your source for medical diet information' });
});

app.get('/contact', function (req, res) {
  res.render('contact', { appTitle: 'MedHealthDiets: your source for medical diet information' });
});

app.get('/competitorcomparison', function (req, res) {
  res.render('comparison', {appTitle: 'MedHealthDiets: your source for medical diet information' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
