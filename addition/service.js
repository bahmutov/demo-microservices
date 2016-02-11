'use strict';

var seneca = require('seneca')();
seneca.use('env-plugins');

seneca.add({role: 'addition', cmd: 'add'}, function(args, callback) {
  callback(null, {
    data: Number(args.a) + Number(args.b)
  });
});

seneca.add({role: 'addition', cmd: 'sub'}, function(args, callback) {
  callback(null, {
    data: Number(args.a) - Number(args.b)
  });
});


seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});
module.exports.seneca = seneca;
