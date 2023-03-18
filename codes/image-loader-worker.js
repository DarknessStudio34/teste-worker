function loadImageAsync(src) {
  return new Promise(function(resolve, reject) {
    var img = new Image();
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject(new Error('Failed to load image: ' + src));
    };
    img.src = src;
  });
}

self.onmessage = function(event) {
  loadImageAsync(event.data).then(function(img) {
    var canvas = new OffscreenCanvas(img.width, img.height);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    self.postMessage(canvas.transferToImageBitmap());
  }).catch(function(error) {
    console.error(error);
  });
};
