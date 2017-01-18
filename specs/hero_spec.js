var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Superpower = require('../superpower');
var Villian = require('../villian');

describe('Hero', function(){
  var hero;
  var food1;
  var food2;
  var rat;
  var superpower;
  var villian;

  beforeEach(function(){
    hero = new Hero("Supergirl", 40, "chocolate");
    food1 = new Food("chocolate", 4);
    food2 = new Food("apple", 5);
    rat = new Rat();
    superpower = new Superpower("fly", 150);
    villian = new Villian(100);
  });

  it('should have a name', function(){
    assert.equal("Supergirl", hero.name);
  });

  it('should have a health value', function(){
    assert.equal(40, hero.health);
  });

  it('should have a favourite food', function(){
    assert.equal("chocolate", hero.faveFood);
  });

  it('should be able to talk', function(){
    assert.equal("Hello, I'm Supergirl", hero.talk());
  });

  it('eating normal food should increase health by replenishment value', function(){
    assert.equal(200, hero.eat(food2));
  });

  it('eating favourite food should increase health by 1.5* value', function(){
    assert.equal(240, hero.eat(food1));
  });

  it('eating poisoned food should decrease health', function(){
    rat.touchFood(food1);
    assert.equal(24, hero.eat(food1));
  });

  it('hero can detect poisoned food if health is over 300', function(){
    hero.eat(food1);
    hero.eat(food2);
    rat.touchFood(food1);
    assert.equal("Food poisoned!", hero.detectPoison(food1));
    assert.equal("Food safe to eat", hero.detectPoison(food2));
  });

  it('hero cannot detect poison if health below 300', function(){
    rat.touchFood(food1);
    assert.equal("Cannot detect poison", hero.detectPoison(food1));
  });

  it('hero can gain superpower if health above 200', function(){
    assert.equal("Got to eat more to gain superpowers!", hero.gainSuperpower(superpower));
    hero.eat(food1);
    hero.gainSuperpower(superpower);
    assert.deepEqual([superpower], hero.superpowers);
  });

  it('hero can use superpower to defeat villian', function(){
    assert.equal("It's too dangerous - run away!", hero.useSuperpower(villian));
    hero.eat(food1);
    hero.gainSuperpower(superpower);
    assert.equal("Superpower defeats villian!", hero.useSuperpower(villian));
  });

});