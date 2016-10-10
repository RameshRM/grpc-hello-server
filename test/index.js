'use strict';

var assert = require('assert');

describe('Should work simple assertion', function() {
  it('Should add two numbers', function(done) {
    assert.ok(1 + 1 === 2);
    done();
  });
});
