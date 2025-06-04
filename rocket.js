
function Rocket(dna) {
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.timeOfImpact;
  this.completed = false;
  this.crashed = false;
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA(); // every rocket has a DNA object
  }
  this.fitness = 0;

  // apply force for the acceleration
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.calcFitness = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y); // distance

    this.fitness = map(d, 0, width, width, 0); // fitness is invert of distance
    if (this.completed) {
      var speedFitness = ((lifespan - this.timeOfImpact) / lifespan) * 35; // get a speed value from 0 to 1
      this.fitness *= speedFitness;
    }
    if (this.crashed) {
      this.fitness /= 10;
    }
  }

  this.update = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y); // distance
    if (d < 10) {
      if (!this.completed) {
        this.timeOfImpact = count;
      }
      this.completed = true;
      this.pos = target.copy(); // move the rocket to the target if it is hit
    }

    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }

    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }

    this.applyForce(this.dna.genes[count]); // apply 1 of the directions in the genepool of the rocket's dna as a force

    // only move if it hasn't hit the target
    if (!this.completed && !this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }

  this.show = function() {
    push();
    noStroke();
    fill(255, 100);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 25, 5);
    pop();
  }
}
