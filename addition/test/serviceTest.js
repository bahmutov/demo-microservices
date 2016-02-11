'use strict';

process.env.SERVICE_HOST = 'localhost';
process.env.SERVICE_PORT = 3001;

var test = require('tape');
var seneca = require('../service').seneca;
var obind = require('obind');
var blue = require('bluebird');

var add = obind(blue.promisify(seneca.act, { context: seneca }),
  { role: 'addition', cmd: 'add' });

test('add test', function(t) {
  t.plan(1);
  add({a: 2, b: 3})
    .then(function (result) {
      t.equal(5, result.data);
    })
    .done();
});


test('sub test', function(t) {
  t.plan(2);
  seneca.act({role: 'addition', cmd: 'sub', a: 10, b: 1}, function(err, result) {
    t.equal(err, null);
    t.equal(9, result.data);
  });
});


test('shutdown', function(t) {
  t.plan(1);
  t.equal(1, 1);
  setTimeout(function() { process.exit(0); }, 100);
});

