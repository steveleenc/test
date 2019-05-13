var express = require('express');

var app = express();

var port = process.env.PORT || 8080; // set our port


app.use('/', function(req, res, next) {
  res.send("<h1>Hi</h1>")
});



app.listen(port);
console.log("HelloWorld is listening on port " + port + ".")

module.exports = app;
