const Card = function(cardObject){
  this.name = cardObject.name;
  this.intelligence = cardObject.intelligence;
  this.strength = cardObject.strength;
  this.agility = cardObject.agility;
};

module.exports = Card;
