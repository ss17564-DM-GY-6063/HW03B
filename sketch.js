let eDiam = 80;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240,215,0);
  fill("black");
  randomSeed(55);

  for (let xpos = 0; xpos <= width; xpos += eDiam) {
    for (let ypos = 0; ypos <= height; ypos += eDiam) {
      let tDiam = random(3,50);
      let trans = random(10,80);
      ellipse(xpos + trans, ypos + trans, tDiam, tDiam);
    }
  }
}