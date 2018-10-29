var https = require('https');                               

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


https.get(requestOptions, function(response) {
  response.setEncoding('utf8');

  output = ''

  response.on('data', function(data) {
    output += data; 
  });

  response.on('end', function() {
    console.log(output);
  });

});