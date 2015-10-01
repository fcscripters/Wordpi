var fs = require('fs');
var ac = require('./index.js');


var index = fs.readFileSync(__dirname + '/index.html');


module.exports = function handler(request, response) {
        console.log('request: '+request.url);
        if (request.url.length === 1) {
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.end(index);

        }
        else if (request.url.indexOf('/define') > -1) {
            var userInput = request.url.split('/')[2].toString();
            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(userInput);
            console.log(' - - - - - - - - - ->>>> ', userInput);

            ac.import(function(err, words) {
                ac.findWord(userInput, function(err, found) {
                  console.log(userInput + "  is import in handler working  " + found);
                    response.write(JSON.stringify(found));

                    ac.define(found[0], function(err, definition){
                      console.log("define test in handler");
                      response.end(definition);
                    });

                });
            });


        }
        else {
            console.log(request.url);
            fs.readFile(__dirname + request.url, function(err, file) {
                if (err) {
                    response.end();
                } else {
                    var ext = request.url.split('.')[1];
                    response.writeHead(200, {
                        'Content-Type': 'text/' + ext
                    });
                }
                    response.end(file);

              });



        }



};
