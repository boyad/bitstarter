var express = require('express');
var buf     = require('buffer');
var fs      = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  /*
  response.send('Hello World 2!');
  */
  mybuf = new Buffer(256);
  len = mybuf.write(fs.readFileSync("index.html"))
  response.send(mybuf.toString('utf8',0,len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
