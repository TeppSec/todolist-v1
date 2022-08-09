//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Response current Date to the Website
app.get('/', (req, res) => {
  
  let today = new Date();
  
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  let day = today.toLocaleDateString('de-DE', options);
  res.render('list', { kindOfDay: day, newListItems: items });
});

// Get user input from the form
app.post('/', (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
