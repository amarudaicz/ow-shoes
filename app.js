const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const morganBody = require('morgan-body')
const app = express();
const loggerStream = require('./utils/handleSlack')



morganBody(app,{
  noColors:true,
  stream:loggerStream,
  skip:function(req, res) {
    return res.statusCode < 400 //SI EL STATUSCODE ES MENOR A 400 no enviara los msg
  }

})







app.use(express.static(__dirname + '/views/public'));
app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, '/views/vistas'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', require('./routes'))



















app.listen(app.get('port'), () => {
  console.log(`el server is on in ${app.get('port')}`);
});


module.exports = app