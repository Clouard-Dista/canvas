
module.exports = function load (app) {
  const fs = require("fs");
  const  path = require('path');
  app.get('/', function(request, response) {
    fs.readFile('static/index.html', (err, data) => {
      if (err) {
        response.writeHead(500);
        response.end(err);
        return;
      }

      data = data.toString().replace(/\{\{someVal\}\}/, '[81, 90, 68, 83]');
      response.writeHead(200);
      response.sendFile(path.join(__dirname, data));
      response.end(data, 'utf8'); 
    });
  });
}