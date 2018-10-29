var https = require('https');     

//INPUT: requestOptions i.e. host + path
//OUTPUT: html as string, modified by callback
function getHTML (requestOptions, callback) {
    var output = ''
    https.get(requestOptions, function(response) {
        response.setEncoding('utf8');
        var html = ''
        response.on('data', function(data) {
            html += data; 
            
        })
        response.on('end', function() {
            output = html;
            callback(output);
          });
        //console.log(output);
    })
    //console.log(output)
}

module.exports = getHTML;