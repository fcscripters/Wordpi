var assert = require('assert');
var ac = require('../index.js');
var testindex = 1; // see: https://testanything.org/tap-version-13-specification.html

var shot = require("shot");
var handler = require("../handler");
var test = require("tape");


assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');


console.log("# ac.import imports a list of words into memory");
ac.import(function(err, words) {
  assert.equal(words.length, 235887);
});

console.log("# attempt to invoke ac.import without a valid callback");
var error = ac.import('string');
assert.equal(error.message, 'callback argument MUST be a function');

console.log('# ac.findWord finds a string in words array');
ac.import(function() {
  ac.findWord('care', function(err, found) {
    assert.equal(found.length, 31);
  });
});

console.log('# ac.Define returns the definition');
ac.import(function() {
  ac.define('care', function(err, definition) {
    assert.equal(definition, "A burdened state of mind, as that arising from heavy responsibilities; worry.");
  });
});



test("Home page", function(t) {
  var request = {
    method: "GET",
    url: "/"
  };
  shot.inject(handler, request, function(res) {
    t.equal(res.statusCode, 200, "server returns OK when at Homepage");
    t.end();
  });
});

test("Going to /define/care return definition", function(t) {
  var request = {
    method: "GET",
    url: "/define/care"
  };

  shot.inject(handler, request, function(res) {
    console.log("this is payload", res);
    var payload = res.payload;
    var result = payload.indexOf('£') > -1;
    t.equal(result, true, "Definition retunred when requested using http");
    t.end();
  });
});

test("Going to null if no definition is present", function(t) {
  var request = {
    method: "GET",
    url: "/define/feelingful"
  };

  shot.inject(handler, request, function(res) {
    console.log("this is payload", res);
    var payload = res.payload;
    var result = payload.indexOf('null') > -1;
    t.equal(result, true, "Definition retunred when requested using http");
    t.end();
  });
});

test("Going to /define/care return definition", function(t) {
  var request = {
    method: "GET",
    url: "/userInput.js"
  };

  shot.inject(handler, request, function(res) {
    t.equal(res.statusCode, 200, "server returns userInput.js file correctly");
    t.end();
  });
});

test("Going to /define/care return definition", function(t) {
  var request = {
    method: "GET",
    url: "/userscript.js"
  };

  shot.inject(handler, request, function(res) {
    t.equal(res.statusCode, 404, "Error returns 200 in the if loop");
    t.end();
  });
});
