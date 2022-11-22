const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()



 
//INSTANCIA DE EXPRESS
const app = express();

//MIDDLEWARES
app.use(express.static(__dirname + '/src/server/services'));
app.use(express.static(__dirname + '/src/client/public'));
app.use(express.static(__dirname + '/src/server/uploads'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



//RUTAS
app.use('/', require('./src/server/routes'));


//app.set?
app.set('views', __dirname + '/src/client/public/views/vistas');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT );






app.listen(app.get('port'), ( ) => {

  console.log(`el server is on in ${app.get('port')}`);

});



 