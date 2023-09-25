let eDiam = 80;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240,215,0);
  fill("black");
  randomSeed(22);

  for (let xpos = 0; xpos <= width; xpos += eDiam) {
    for (let ypos = 0; ypos <= height; ypos += eDiam) {
      let x = random(0, 1);
      if(x < 0.5) {
        tDiam = 10;
      } else if (x < 0.9){
        tDiam = 30;
      }
      else if (x < 1){
        tDiam = 50;
      }
      let trans = random(10,80);
      ellipse(xpos + trans, ypos + trans, tDiam, tDiam);
    }
  }
}