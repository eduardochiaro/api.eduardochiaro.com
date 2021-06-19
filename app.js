require('dotenv').config();
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var routes = require('./api/routes'); //importing route
routes(app); //register the route


app.listen(port, () => console.log(`App listening on port ${port}`));