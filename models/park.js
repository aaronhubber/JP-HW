const Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.parkDinos = [];
  }
  
  Park.prototype.addDino = function (dinosaur) {
    this.parkDinos.push(dinosaur);
  };

Park.prototype.addDino = function (dinosaur) {
    this.parkDinos.push(dinosaur);
  };

Park.prototype.removeDino = function (dinosaur) {
    this.parkDinos.pop(dinosaur);
};

  Park.prototype.findMostVisitors = function (){ //unsure why shift doesn't work
    this.parkDinos.sort(function(a,b){return a.guestsAttractedPerDay - b.guestsAttractedPerDay});
    return this.parkDinos[this.parkDinos.length -1] 
};
  
Park.prototype.getDinoSpecies = function(species){
    dinoSpecies = []
    for (const dino of this.parkDinos){
        if (dino.species == species){
            dinoSpecies.push(dino)
        }
    } return dinoSpecies;
};

Park.prototype.visitorsEachDay = function(){
    visitors = 0
    for (const dino of this.parkDinos){
        visitors += dino.guestsAttractedPerDay
    }
    return visitors
          
};

Park.prototype.visitorsEachYear = function(){
    yearlyVisitors = this.visitorsEachDay() * 365;
    return yearlyVisitors
};

Park.prototype.yearlyRevenue = function(){
    yearlyRevenue = this.visitorsEachYear() * this.price
    return yearlyRevenue
};

Park.prototype.removeSpecies = funtion(){
    this.parkDinos.getDinoSpecies
};
  module.exports = Park;