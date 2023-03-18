var c = 0;
var graphics = {};

function setup() {
  createCanvas(800, 360);
}

function draw() {
  background(220);
  if (c == 1) {
    li();
  } else if (c == 2){
      background(graphics.bg);
    }
}

function mouseClicked (){
  if(c == 2) {c = 2}
  else { c = 1 }
}
function li() {
  var worker = new Worker('codes/load-image-worker.js');
  worker.postMessage('assets/teste.png');
  console.log('funcionando')
  worker.onmessage = function(event) {
    graphics.bg = event.data;
    c = 2;
  };
}
