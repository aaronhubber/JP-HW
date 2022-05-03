const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;


  beforeEach(function () {
    dinosaur1 = new Dinosaur("Big Teeth Guy", "Carnivore", 500)
    dinosaur2= new Dinosaur ("Long Neck Fella", "Herbivore", 300)
    dinosaur3 = new Dinosaur ("Wee Ratty Dude", "Omnivore", 20)
    park = new Park("Big Daves Dino Bananza", 15)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Big Daves Dino Bananza")
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = [];
    assert.deepEqual(actual, park.parkDinos)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur1);
    const actual = [dinosaur1]
    assert.deepStrictEqual(actual, park.parkDinos)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur1)
    park.removeDino(dinosaur1)
    const actual = []
    assert.deepStrictEqual(actual, park.parkDinos)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur1)
    park.addDino(dinosaur2)
    park.addDino(dinosaur3)

    const actual = park.findMostVisitors()
    assert.deepStrictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur1)
    park.addDino(dinosaur2)
    park.addDino(dinosaur3)
    park.addDino(dinosaur1)
    const actual = park.getDinoSpecies("Big Teeth Guy");
    assert.deepStrictEqual (actual, [dinosaur1, dinosaur1])
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino (dinosaur1)
    park.addDino (dinosaur2)
    park.addDino (dinosaur3)

    const actual = park.visitorsEachDay()
    assert.strictEqual(actual, 820)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino (dinosaur1)
    park.addDino (dinosaur2)
    park.addDino (dinosaur3)

    const actual = park.visitorsEachYear()
    assert.strictEqual(actual, 299300)
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino (dinosaur1)
    park.addDino (dinosaur2)
    park.addDino (dinosaur3)
    const actual = park.yearlyRevenue()
    assert.strictEqual(actual, 4489500)
  });

});
