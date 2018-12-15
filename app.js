'use strict'
const Model = require('./models');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static('views'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs', { title : 'KANGMAN SCHOOL', message : 'Hello there, Sign up and Join with Us'})
})

app.get('/student', (req, res) => {
  res.render('student.ejs', { head: 'KMSCHOOL', title : 'FORM STUDENT', message : 'Insert Data Student'})
})

app.get('/teacher', (req, res) => {
  Model.Teacher.findAll()
    .then((teachers) => {
      res.render('teacher.ejs', { head: 'KMSCHOOL', title : 'TEACHERS DATA', data: teachers})
    })

    .catch((err) => {
      console.log(err);
    })
})

app.post('/student', (req, res) => {
  let newStudent = req.body;
  Model.Student.create(newStudent)
    .then((data) => {
      console.log(data);
      res.redirect('/student')
    })

    .catch((err) => {
      console.log(err);
    })
})

app.listen(3000, () => {
  console.log('Running on port 3000');
})