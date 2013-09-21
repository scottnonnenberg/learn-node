
var express = require('express');

var Logic = require('../both/logic');
var logic = new Logic();
console.log('time: ' + logic.time());

var app = express();
app.use(express.static('./src/4. sharing code'));

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('tests');
});

app.listen(3000);
