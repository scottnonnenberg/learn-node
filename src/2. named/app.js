
var app = require('express')();
var routes = require('./routes');

app.get('/', routes.root);

app.listen(3000);
