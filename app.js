const express = require('express');
var app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
  res.render('index.ejs')
})

app.get('/student', function(req, res) {
  res.render('student.ejs')
})

app.get('/teacher', function(req, res) {
  res.render('teacher.ejs')
})

app.post('/student',function(req,res){
    console.log(req.body)
    // res.render('inputStudent.ejs')
    res.send(req.body)
})

app.listen(3000, function() {
  console.log('server is listening to port 3000');
})
