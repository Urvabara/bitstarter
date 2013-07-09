#!/usr/bin/env node
var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  var buffer = new Buffer(32000);
  buffer.write(data);
});

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
