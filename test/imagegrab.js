var test = require('tape');
var imgrab = require('../');

test('fetches array of image src from website', function (t) {
    console.log(imgrab("http://rauljordan.github.io/Baecoin"));

    t.end();
});
