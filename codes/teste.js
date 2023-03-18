var c = 0;
var graphics = {};

function setup() {
  createCanvas(800, 360);
  var canvasElement = document.getElementsByTagName('canvas')[0];
  canvasElement.addEventListener('click', function() {
    var worker = new Worker('codes/image-loader-worker.js');
    worker.postMessage('assets/teste.png');
    worker.onmessage = function(event) {
      graphics.bg = event.data;
      c = 1;
    };
  });
}

function draw() {
  background(220);
  if (c == 1) {
    background(graphics.bg);
  }
}
