
var request = require('request');
var cheerio = require('cheerio');

module.exports = function (url, callback) {

  request(addHTTP(url), function (err, response, html) {
    if (!err && response.statusCode === 200) {
      var $ = cheerio.load(html);
      var images = $("img").map(function () {
        return this.attribs.src;
      }).get();

      callback(images);
    }
  });


};

function addHTTP(url) {
   if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
   }
   return url;
}
