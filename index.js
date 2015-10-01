var fs = require('fs');
var http = require('http');
var ac = {};

ac.import = function (callback) {
  if (!callback || typeof callback !== 'function') {
    return new Error('callback argument MUST be a function');
  }
  var filename = __dirname + '/words.txt';
  fs.readFile(filename, 'utf8', function (err, data) {
    ac.words = data.split('\n');
    return callback(err, ac.words);
  });
};

// ac.stats = function (word, callback) {
//   if (!ac.searches) {
//     ac.searches = {};
//   }
//   if (!ac.searches[word]) {
//     ac.searches[word] = [];
//   }
//   ac.searches[word].push(new Date().getTime());
//   callback(null, ac.searches);
// };

ac.findWord = function (word, callback) {
  // who wants to volunteer to implement the method?
  var found = [];
  for (var i = 0; i < ac.words.length; i++) {
    if (ac.words[i].search(word) === 0) {
      found.push(ac.words[i]);
    }
  }
  return callback(null, found);
};

ac.define = function(word, callback){

  //  var defurl = 'http://api.wordnik.com:80/v4/word.json/care/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
  console.log ("define in index.js");
  var options = {
    hostname:'api.wordnik.com',
    port: 80,
    path: '/v4/word.json/'+word+'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    method:'GET'
  };

  var dataDef = '';

  var request = http.request(options, function (res) {
    console.log("inside request var");
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk){
      body += chunk;

    });

    res.on ('end', function(){
      var data = JSON.parse(body);
      dataDef = (data[0].text);
      callback(null, dataDef);
    });

  });

  request.end();
};



module.exports = ac;
