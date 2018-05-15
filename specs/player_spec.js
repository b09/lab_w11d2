const assert = require('assert');
const Player = require('../player');
const deck = require('../seed');
const Card = require('../card');

describe('Player', function(){
  let player;

  beforeEach(function(){
    player = new Player('Brendan');
  });

  it('should have name', function(){
    const actual = player.name;
    assert.strictEqual(actual, 'Brendan');
  });

  it('should have cards', function(){
    const actual = player.cards.length;
    assert.strictEqual(actual, 0);
  });

  it('should check hand is empty', function(){
    const actual = player.isHandEmpty();
    assert.strictEqual(actual, true);
  })

  it('should receive a card', function(){
    const card = new Card(deck[0]);
    player.receiveCard(card);
    const actual = player.cards[0];
    assert.deepStrictEqual(actual, card);
  });

  it('should draw a card', function(){
    const card = new Card(deck[0]);
    player.receiveCard(card);
    const actual = player.drawCard();
    assert.deepStrictEqual(actual, card);
  });

});
