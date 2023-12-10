const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, '/public')));
app.use( express.static(path.join(__dirname, '/images')));

app.get('/', (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});


app.get('/404', (req, res) => {
  res.show('404.html');
});

app.get('/forbidden', (req, res) => {
  res.show('forbidden.html');
});

app.use((req, res) => {
  res.status(404).show('404.html');
});


app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});