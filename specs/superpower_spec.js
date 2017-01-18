var assert = require('assert');
var Superpower = require('../superpower');

describe('superpower', function(){
  var superpower1;
  var superpower2;
  beforeEach(function(){
    superpower1 = new Superpower("fly", 100);
    superpower2 = new Superpower("turn invisible", 200);
  });

  it('can return superpower type', function(){
    assert.equal("fly", superpower1.type);
  });

  it('can return power level', function(){
    assert.equal(100, superpower1.powerLevel);
  });

  it('can invoke superpower', function(){
    assert.equal("Superpower defeats villian!", superpower1.invoke());
  })
  
});