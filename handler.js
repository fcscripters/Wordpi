var fs = require('fs');
var ac = require('./index.js');


var index = fs.readFileSync(__dirname + '/index.html');


module.exports = function handler(request, response) {
  if (request.url.length === 1) {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    response.end(index);

  } else if (request.url.indexOf('/define') > -1) {
    var userInput = request.url.split('/')[2].toString();
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    //response.write(userInput);

    ac.import(function(err, words) {
      ac.findWord(userInput, function(err, found) {
        response.write(JSON.stringify(found));
        var ran = Math.random();
        if (found.length > 10) {
          ran = Math.floor(ran * 10);
        } else {
          ran = Math.floor(ran * found.length);
        }

        ac.define(found[ran], function(err, definition) {
          response.write('£' + definition);
          response.end('£' + ran.toString());
        });

      });
    });


  } else {
    fs.readFile(__dirname + request.url, function(err, file) {
      if (err) {
        // dont reply 200 currently replying with 200 if in this loop.
        response.writeHead(404, {
          'Content-Type': 'text/' + ext
        });
        response.end();
      } else {
        var ext = request.url.split('.')[1];
        response.writeHead(200, {
          'Content-Type': 'text/' + ext
        });
        response.end(file);
      }

    });



  }



};
