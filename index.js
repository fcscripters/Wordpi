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

console.log("this is word in define ----",word);
  var options = {
    hostname:'api.wordnik.com',
    port: 80,
    path: '/v4/word.json/'+word+'/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    method:'GET'
  };
  console.log("-------path",options.path);


  var dataDef = '';

  var request = http.request(options, function (res) {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk){
      body += chunk;

    });

    res.on ('end', function(){
      console.log("-----------body",body);
      var data = JSON.parse(body);
      console.log("----------->definition form index.js",dataDef);
      if(data[0]){
      dataDef = (data[0].text);
      console.log("----------->definition form index.js",dataDef);
      callback(null, dataDef);
    }
    else{
      callback("You have typed in a word that is not in the dictionary", null);
    }
    });

  });

  request.end();
};



module.exports = ac;
