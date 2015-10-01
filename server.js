
var http = require('http');
var port = process.env.PORT || 3000;
var handler = require('handler.js');
var fs = require('fs');

var index = fs.readFileSync(__dirname + '/index.html');
ac.import(function() {
  console.log('Done Importing!');
});
http.createServer(function handler(request, response) {
  var url = request.url;
  console.log("request.url:", url);
  if (url.length === 1) {
    console.log(index.toString());
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(index.toString());

  }
  if (url.indexOf('/define') > -1){
    var userword = url.split('/')[2].toString();
response.writeHead(200, {"Content-Type": "text/html"});
response.write("<h1>"+userword+"</h1>");
console.log(' - - - - - - - - - ->>>> ',userword);

   ac.findWord(userword, function(err, found) {
     response.write(JSON.stringify(found));
     console.log ("find word works");
      ac.define(userword, function(err, request){
        //respond to the request
        console.log ("define");
        // console.log(dataDef);
        // response.write(request);
        response.end();

      })
   });




  }
  response.end('hello world!');
  console.log(index);

}).listen(port);

console.log('node http server listening on http://localhost:' + port);
