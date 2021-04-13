"use strict"

const add = require('../code/add.js');

QUnit.module('add')

QUnit.test('add two numbers', assert => {
  assert.equal(add(1, 1), 2);
});

QUnit.test('this should pass', assert => {
  assert.equal(add(2, 2), 4);
});