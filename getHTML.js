var https = require('https');     

//INPUT: requestOptions i.e. host + path
//OUTPUT: html as string
function getHTML (requestOptions) {
    https.get(requestOptions, function(response) {
        response.setEncoding('utf8');
        html = ''
        response.on('data', function(data) {
            html += data; 
        })
        response.on('end', function() {
            return html;
          });
    })
}