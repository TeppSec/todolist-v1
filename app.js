//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use('view engine', 'ejs');

app.get('/', function (req, res) {
  var today = new Date();
  var currentDay = today.getDate();

  if (currentDay === 6 || currentDay === 0) {
    res.send("Yay it's the weekend!");
  } else {
    res.send('Boo! I have to work!');
  }
});

app.listen(3000, function () {
  console.log('Server started on port 3000.');
});
