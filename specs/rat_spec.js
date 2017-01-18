var assert = require('assert');
var Food = require('../food');
var Rat = require('../rat');
var Hero = require('../hero');
var Superpower = require('../superpower');

describe('rat', function(){
  var rat;
  var food;
  var hero;
  var superpower;
  beforeEach(function(){
    rat = new Rat();
    food = new Food("banana", 3);
    hero = new Hero("Supergirl", 240, "chocolate");
    superpower = new Superpower("fly");
    });

  it('should be able to poison food', function(){
    assert.equal(false, food.poisoned);
    rat.touchFood(food);
    assert.equal(true, food.poisoned);
  });

  it('should be able to bite hero to gain superpower if hero has one', function(){
    assert.equal("This hero has no superpowers!", rat.biteHero(hero));
    hero.gainSuperpower(superpower);
    assert.deepEqual([superpower], rat.biteHero(hero));
  });
  
  });
