var Superpower = function(type, powerLevel){
  this.type = type;
  this.powerLevel = powerLevel;
};

Superpower.prototype = {
  invoke: function(){
    return "Superpower defeats villian!";
  }
}

module.exports = Superpower;

