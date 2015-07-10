# ImageGrab.js

Given a URL, fetches a list of all images in that webpage using
node.js's request module

[![Build Status](https://travis-ci.org/rauljordan/imagegrab.js.svg?branch=master)](https://travis-ci.org/rauljordan/imagegrab.js)

# Usage

```
> var imgrab = require('imagegrab');
> imgrab('http://mysite.com', function (images) {
    console.log(images);
  })
> ['http://mysite.com/image1.jpg', 'http://mysite.com/image2.jpg]
```


# Install

With [npm](http://npmjs.org) do:

```
npm install imagegrab
```


# License

MIT
===
