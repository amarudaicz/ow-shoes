const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config()



//INSTANCIA DE EXPRESS
const app = express();

//MIDDLEWARES
app.use(express.static(__dirname + '/services'));
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  session({
    secret: 'keyboard cat',
    cookie: {},
    resave: true,
    saveUninitialized: false,
  })
);

//RUTAS
app.use('/', require('./routes'));

//app.set?
app.set('views', path.join(__dirname, '/public/views/vistas'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT );





app.listen(app.get('port'), ( ) => {

  console.log(`el server is on in ${app.get('port')}`);

});



