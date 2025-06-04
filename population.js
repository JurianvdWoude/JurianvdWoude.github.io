
function Population() {
  this.rockets = [];
  this.popsize = 25;
  this.matingpool = [];


  // create a bunch of rockets
  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  // evaluate the fitness of the rockets
  this.evaluate = function() {
    var maxfit = 0;
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();

      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness; // find the max fitness of all the rockets
      }
    }

    maxfit = maxfit === 0 ? 1 : maxfit;
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit; // normalize all the fitness values
    }

    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var n = this.rockets[i].fitness * 100; // rocket fitness between 0 and 100
      for (var j = 0; j < n; j++) {
        // add as many rockets to new matingpool as new fitness level
        this.matingpool.push(this.rockets[i]);
      }
    }
  }

  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  }

  // create a function which updates the rockets' behavior
  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

