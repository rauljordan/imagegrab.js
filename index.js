
var request = require('request');
var cheerio = require('cheerio');

module.exports = function (url) {
  request(addHTTP(url), function (error, response, html) {
    return response.statusCode;
    //processImages(error, response, html);
  });
};


function addHTTP(url) {
   if (!/^(f|ht)tps?:\/\//i.test(url)) {
      url = "http://" + url;
   }
   return url;
}

function processImages(error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    return $("img").map(function () {
      return this.attribs.src;
    }).get();
  }
}
