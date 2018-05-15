const assert = require('assert');
const Card = require('../card');

describe('Card', function(){
  let card;

  beforeEach(function() {
    card = new Card({
      name: 'Scarlet Witch',
      intelligence: 7,
      strength: 10,
      agility: 5
    });
  });

  it('should have a name', function(){
    const actual = card.name;
    assert.strictEqual(actual, 'Scarlet Witch');
  });

  it('should have intelligence', function(){
    const actual = card.intelligence;
    assert.strictEqual(actual, 7);
  });

  it('should have strength', function(){
    const actual = card.strength;
    assert.strictEqual(actual, 10);
  });

  it('should have agility', function(){
    const actual = card.agility;
    assert.strictEqual(actual, 5);
  });

})
