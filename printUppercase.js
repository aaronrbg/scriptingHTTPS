var https = require('https');  
var getHTML = require('./getHTML.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var uppercase = html.toUpperCase()
  console.log(uppercase);
}

getHTML(requestOptions, printUpperCase);
