var assert = require('assert');
var Villian = require('../villian');

describe('villian', function(){
  var villian = new Villian(100);

  it('can return danger level', function(){
      assert.equal(100, villian.dangerLevel);
  });
});
