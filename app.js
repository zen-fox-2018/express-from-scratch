const express = require('express')
const app = express()
const dataTeachers = require('./dataTeachers.json')

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/student', function(req, res) {
  res.render('student')
})

app.post('/student', function(req, res) {
  res.send(req.body)
})

app.get('/teachers', function(req, res) {
  res.send(dataTeachers)
})

app.listen(3000, function() {
  console.log('Server running on port 3000');
})