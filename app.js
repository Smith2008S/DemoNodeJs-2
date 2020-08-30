var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World Again!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/moon', function (req, res) {
  res.send('Hello Moon!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

