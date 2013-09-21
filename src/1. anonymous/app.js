
var app = require('express')();

app.get('/', function(req, res) {
  res.send({data: 'my first express app!'});
});

app.listen(3000);
