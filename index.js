const express = require('express');
const app = express();
require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('App is up and running on 3000');
});
