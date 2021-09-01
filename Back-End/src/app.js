let express = require('express');
let session=require('express-session');
let morgan=require('morgan');
let bodyParser = require('body-parser');
let passport=require('passport');
const cors=require('cors');



//import Rutas
let indexRouter = require('./routes/index');

///prueba conexion
let app = express();


//1. CORS
app.use(cors())


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
