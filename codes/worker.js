onmessage = function(e) {
  if (e.data.type === 'start_tld20_1') {
    if (e.data.ld === 1) {
      importScripts('p5.js');
      var graphics = {};
      var c = 0;
      
      function tld20_1() {
        var img0 = loadImage('assets/20_9/int/mp_bg.png');
        var img1 = loadImage('assets/int_un/Mike-fl-scene1.png');
        var img2 = loadImage('assets/int_un/Allan-fl-scene1.png');
        var img3 = loadImage('assets/int_un/Pai-fl-scene1.png');
        var img4 = loadImage('assets/int_un/bt_jogar.png');
        var img5 = loadImage('assets/int_un/bt_options.png');

        Promise.all([img0, img1, img2, img3, img4, img5]).then(function(values) {
          graphics.bg = values[0];
          graphics.flM = values[1];
          graphics.flA = values[2];
          graphics.flP = values[3];
          graphics.btJ = values[4];
          graphics.btO = values[5];
          c = 1;
          postMessage({type: 'tld20_1_done', graphics: graphics});
        });
      }
      tld20_1();
    }
  }
};
