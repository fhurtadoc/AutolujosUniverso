var express = require('express');
var session=require('express-session');
var morgan=require('morgan');
var bodyParser = require('body-parser');
var passport=require('passport');



//import Rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

///prueba conexion
var app = express();

// 2. Middlewares

//sesiones
app.use(session({
  secret: 'kadcksacnsakjflas',
  resave: false,
  saveUninitialized: false    

}));

//-morgan
app.use(morgan("dev"));
//-body parser 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//pasport 
app.use(passport.initialize());
app.use(passport.session());


//3.rutas
app.use(indexRouter);



module.exports = app;
