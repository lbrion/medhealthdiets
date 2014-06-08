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

app.get('/diets/diabetes', function (req, res) {
  res.render('diabetes', { appTitle: 'MedHealthDiets: your source for medical diet information' });
});

app.get('/diets/highbloodpressure', function (req, res) {
  res.render('highbloodpressure', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/alzheimers', function (req, res) {
  res.render('alzheimers', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/eyesight', function (req, res) {
  res.render('eyesight', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/celiacs', function (req, res) {
  res.render('celiacs', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/cystinuria', function (req, res) {
  res.render('cystinuria', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/kidney', function (req, res) {
  res.render('kidney', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/liver', function (req, res) {
  res.render('liver', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/lowsodium', function (req, res) {
  res.render('lowsodium', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/diets/weightloss', function (req, res) {
  res.render('weightloss', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/reviewJC', function (req, res) {
  res.render('reviewJC', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/reviewKJ', function (req, res) {
  res.render('reviewKJ', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/future', function (req, res) {
  res.render('future', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

app.get('/making', function (req, res) {
  res.render('making', { appTitle: 'MedHealthDiets: your source for medical diet information' })
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
