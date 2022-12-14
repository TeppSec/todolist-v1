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

// Root
app.get('/', (req, res) => {
  let day = date.getDate();
  res.render('list', { listTitle: day, newListItems: items });
});

// Query Work or Privat todo
app.post('/', (req, res) => {
  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

// Work todo-list page
app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work list', newListItems: workItems });
});

app.post('/work', (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('/work');
});

// About page
app.get('/about', (req, res) => {
  res.render('about');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
