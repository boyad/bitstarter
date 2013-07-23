var express = require('express');
var buf     = require('buffer');
var fs      = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  /*
  response.send('Hello World 2!');
  */
  mybuf = new Buffer(fs.readFileSync("index.html"),"utf8");
  response.send(mybuf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
