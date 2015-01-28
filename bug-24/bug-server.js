var express = require('express');
var fs = require('fs');

var PORT = 3333;

var app = express()

app.get('/widgets', function (req, res) {
  json = JSON.parse(fs.readFileSync('widgets-get-collection.sample', {encoding:'utf8'}))

  // Return 500 if has querystring ?foo=
  if (req.query.foo) {
    res.status(500).end()
    return
  }

  res.status(200).json(json)
});

app.get('/widgets/:widget_id', function (req, res) {
  json = JSON.parse(fs.readFileSync('widgets-get-item.sample', {encoding:'utf8'}))

  // Return 500 if :widget_id is 'spurious-01
  if (req.params.widget_id === 'spurious-01') {
    res.status(500).end()
    return
  }

  res.status(200).json(json)
});

var server = app.listen(PORT)
