var Hero = function(name, health, faveFood){
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.superpowers = [];
};

Hero.prototype = {
  talk: function(){
    return "Hello, I'm " + this.name;
  },
  eat: function(food){
    if(food.poisoned){
      this.health = (this.health-(food.replenishment*food.replenishment));
    }
    else if(food.name === this.faveFood){
      this.health = (this.health*(food.replenishment*1.5));
    }
    else {
      this.health = (this.health*food.replenishment);
    }
    return this.health;
  },
  detectPoison: function(food){
    if(this.health >= 300){
      return food.poisoned === true ? "Food poisoned!" : "Food safe to eat";
      }
    else {
      return "Cannot detect poison";
      }
    },
    gainSuperpower: function(power){
      if(this.health >= 200){
      this.superpowers.push(power);
    } else {
      return "Got to eat more to gain superpowers!";
      }
    },
    useSuperpower: function(villian){
      for(power of this.superpowers){
        if (power.powerLevel >= villian.dangerLevel){
          return power.invoke();
        }
      } 
        return "It's too dangerous - run away!";
    }
};


module.exports = Hero;