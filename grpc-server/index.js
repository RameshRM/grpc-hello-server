'use strict';

var path = require('path');
var PROTO_PATH = path.join(__dirname, 'protos/hello-world.proto');
var debug = require('debug')('grpc-hello-server');
var util = require('util');

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, {
    message: 'Hello foo ' + call.request.name
  });
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addProtoService(hello_proto.Greeter.service, {
    sayHello: sayHello
  });
  // '0.0.0.0:50051'
  server.bind(util.format('0.0.0.0:%s', process.env.APP_RPC_PORT), grpc.ServerCredentials.createInsecure());
  server.start();
  debug('RPC Server running, %s', process.env.APP_RPC_PORT);
}

main();
