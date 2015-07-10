var test = require('tape');
var imgrab = require('../');


test('fetches array of image src from website', function (t) {

  imgrab("http://rauljordan.github.io/Baecoin", function (images) {
    t.equal(images[0], 'http://i.imgur.com/1Nhg3Ui.png');
    t.end();
  });

});
