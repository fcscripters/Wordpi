
var http = require('http');
var port = process.env.PORT || 3000;
var handler = require('handler.js');
var fs = require('fs');
//var index = fs.readFileSync(__dirname + '/index.html');

var app = http.createServer(handler);

app.listen(port);

console.log('node http server listening on http://localhost:' + port);
