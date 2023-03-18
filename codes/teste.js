var c = 0;
var graphics = {};

function setup() {
  createCanvas(800, 360);
}

function draw() {
  background(220);
  if (c == 1) {
    background(graphics.bg);
  }
}

function mouseClicked (){
  li();
}
function li() {
  var worker = new Worker('codes/load-image-worker.js');
  worker.postMessage('assets/teste.png');
  worker.onmessage = function(event) {
    graphics.bg = event.data;
    c = 1;
  };
}
