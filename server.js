var express = require("express")
var app = express();
var port = process.env.PORT || 5000;
var path = require('path');

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/*', function(request, response) {
  const filePath = path.resolve(__dirname, './build/index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));