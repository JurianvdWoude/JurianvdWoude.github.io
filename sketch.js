var population;
var lifespan = 200;
var lifeP;
var lifecycleP;
var count = 0;
var lifecycleCount = 0;
var target;
var maxforce = 0.2;


function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeP = createP(); // create text for a counter
  lifecycleP = createP(); // create a text for rocket lifecycle
  target = createVector(width / 2, 50)
}

function draw() {
  background(0);
  population.run();
  lifeP.html("lifespan: " + count); // create a counter

  count++; // get a new direction gene from the genepool
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0; // reset count if you've gone through the last gene from the genepool

    lifecycleCount++;
    lifecycleP.html("lifecycle: " + lifecycleCount); // create a counter
  }


  ellipse(target.x, target.y, 16, 16); // create a target
}

