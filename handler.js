
module.exports = function handler(request, response) {

  if (request.url.length === 1) {
    console.log('Hello');
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end('Worked');

  }
};
