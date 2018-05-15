const Card = require('./card');

const Player = function(name) {
  this.name = name;
  this.cards = [];
}

Player.prototype.isHandEmpty = function () {
  return (this.cards.length <= 0);
};

Player.prototype.receiveCard = function (card) {
  this.cards.push(card);
};

Player.prototype.drawCard = function () {
  return this.cards.shift();
};

module.exports = Player;
