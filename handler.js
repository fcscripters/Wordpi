var fs = require('fs');
var ac = require('./index.js')


var index = fs.readFileSync(__dirname + '/index.html');


module.exports = function handler(request, response) {
    //console.log('request: ',request);
    if (request.url.length === 1) {
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.end(index);

    }
    if (request.url.indexOf('/define') > -1) {
        var userword = request.url.split('/')[2].toString();
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write(userword);
        console.log(' - - - - - - - - - ->>>> ', userword);

        ac.import(function(err, words) {
            ac.findWord(userword, function(err, found) {
                response.end(JSON.stringify(found));
            });
        });


    } 
    response.end('hello world! Tormod');
    console.log(index);

};
