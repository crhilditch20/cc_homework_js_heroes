var assert = require('assert');
var Food = require('../food');

describe('Food', function(){
  var food1;
  var food2;
  beforeEach(function(){
    food1 = new Food("chocolate", 4);
    food2 = new Food("apple", 5);
  });

  it('should have a name', function(){
    assert.equal("chocolate", food1.name);
  });

  it('should have a replenishment value', function(){
    assert.equal(4, food1.replenishment);
  });

  it('should start with poisoned value at false', function(){
    assert.equal(false, food1.poisoned);
  });
  

});