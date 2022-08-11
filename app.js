//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = [];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Response current Date to the Website
app.get('/', (req, res) => {
  let day = date.getDay();
  let dayLong = date.getDate();

  res.render('list', { titleDay: day, newListItems: items, titleDate: dayLong });
});

// Get user input from the form
app.post('/', (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
