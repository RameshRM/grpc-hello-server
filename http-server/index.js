'use strict';

var app = require('express')();

app.listen(process.env.APP_HTTP_PORT);

app.get('/', function(req, res) {
  res.send('GRPC Server');
});

app.get('/foo', function(req, res) {
  res.send({
    foo: 'bar'
  });
});
