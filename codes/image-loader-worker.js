onmessage = function(event) {
  var src = event.data;
  fetch(src)
    .then(function(response) {
      return response.blob();
    })
    .then(function(blob) {
      var url = URL.createObjectURL(blob);
      var img = new Image();
      img.onload = function() {
        URL.revokeObjectURL(url);
        postMessage(img);
      };
      img.onerror = function() {
        URL.revokeObjectURL(url);
        postMessage(null);
      };
      img.src = url;
    })
    .catch(function(error) {
      console.error(error);
      postMessage(null);
    });
};

