const express = require('express')
let app = express()
const fs = require('fs')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended : false }))

app.get('/', function(req, res) {
  res.render("INI SEKOLAH")
})


app.get('/student', function(req, res) {
  res.render('./form.ejs')
})

app.post('/student', function(req, res) {
  fs.readFile( './student.json', 'utf8', (err, data) => {
    if (!err){
      let student = JSON.parse(data)
      student.push(req.body)
      fs.writeFile( './student.json' , JSON.stringify(student, null, 2), (err) => {
        if (!err) {
          res.redirect('/student')
        } else {
          res.send(err)
        }
      })
    } else {
      res.send(err)
    }
  })
})

app.listen(3000, function(req, res) {
  console.log('Listening to port 3000')
})