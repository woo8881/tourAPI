const express = require('express')
const app = express()
const router = require('./routes');
const sequelize = require('./models').sequelize;
const methodOverride = require('method-override');
const http = require('http');
const cors = require('cors');
const ejs = require("ejs");
require('dotenv').config();
var url = require('url');
var fs = require('fs');



app.use(express.json());
app.use(methodOverride());
app.use(cors());
sequelize.sync();
app.use('/', router);
app.engine("html", ejs.renderFile);

http.createServer(app).listen(8500, () => {
    console.log("Express Server Start");
  });

app.get('/', function(req, res){
    res.render('view')
  })

  app.get('/index', function(req, res){
    res.render('index')
  })

  app.get('/kakaomap', function(req, res){
    res.render('kakaomap')
  })
  app.get('/tour', function(req, res){
    res.render('tour')
  })

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');

