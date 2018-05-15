const assert = require('assert');
const Player = require('../player');
const Card = require('../card');
const deck = require('../seed');
const Game = require('../game');

describe('Game', function(){
  let game;
  let player1;
  let player2;

  beforeEach(function(){
    player2 = new Player('Jaime');
    player1 = new Player('Brendan');
    game = new Game([player1, player2], deck);
  });

  it('should have players', function(){
    const actual = game.players.length;
    assert.strictEqual(actual, 2);
  });

  it('should have a deck', function(){
    const actual = game.deck.length;
    assert.strictEqual(actual, 6);
  });

  it('should compare strength');



  it('should compare agility');
  it('should compare intelligence');
  it('should have a previous winner', function() {
    const actual = game.previousWinner;
    assert.strictEqual(actual, null);
  };
  it('should give cards to winner');
  it('should ask previous winner to new play category');


    describe('Player', function(){

      it('should receive card from game');
      it('should lose card from game');
      it('should win');
      it('should lose');

    })

});
