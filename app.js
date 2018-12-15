'use strict'

// Getting Started with Express
const express = require('express');
const app = express();
const port = 3000;

// Express Setup
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/student', (req, res) => {
  res.render('student.ejs');
});

app.post('/student', (req, res) => {
  res.render('student.ejs');
});


app.get('/teachers', (req, res) => {
  res.render('teachers.ejs');
});


app.listen(port);