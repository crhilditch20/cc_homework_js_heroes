var Rat = function(){
  this.superpowers = [];
};

Rat.prototype = {
  touchFood: function(food){
    food.poisoned = true;
  },
  gainSuperpower: function(power){
   this.superpowers.push(power);
  },
  biteHero: function(hero){
    if(hero.superpowers.length > 0){
      this.gainSuperpower(hero.superpowers.pop());
  } else {
      return "This hero has no superpowers!";
  }
    return this.superpowers;
  }


};



module.exports = Rat;