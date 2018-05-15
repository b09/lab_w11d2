const Card = require('./card');

class Game {
  constructor(players, deck) {
    this.players = players;
    this.deck = [];
    for (let card of deck) {
      this.deck.push(new Card(card));
    }
    this.previousWinner = null;
  }

  getCardsFromPlayers() {
    let cardsToCompare = [];
    for (let player of this.players) {
      cardsToCompare.push(player.drawCard());
    }
    return cardsToCompare;
  }

  giveCardsToPlayer(player, cards) {
    for (let card of cards) {
      player.cards.push(card);
    }
    
  compareStrength() {
    let cardsToCompare = getCardsFromPlayers();
    if (cardsToCompare[0].strength === cardsToCompare[1].strength) {
      this.previousWinner = this.previousWinner;
    } else if (cardsToCompare[0].strength > cardsToCompare[1].strength) {
      this.previousWinner = players[0];
    } else {
      this.previousWinner = players[1];
    }
    giveCardsToPlayer(this.previousWinner, cardsToCompare);
  }


  }



}
module.exports = Game;
