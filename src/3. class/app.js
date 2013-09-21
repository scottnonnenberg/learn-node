
var app = require('express')();
var Routes = require('./routes');
var routes = new Routes();

app.get('/', routes.root);

app.listen(3000);
