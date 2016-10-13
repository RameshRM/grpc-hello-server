'use strict';
var fs = require('fs');
var options = {
  key: fs.readFileSync('./certs/localhost.key'),
  cert: fs.readFileSync('./certs/localhost.crt')
};

require('http2').createServer(options, function(request, response) {
  response.end('Hello world!');
}).listen(3030);
