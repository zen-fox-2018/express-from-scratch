'use strict'

const express = require('express');
const app = express();
const fs = require('fs')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))

app.get('/', function(req, res) {
  res.render('home.ejs')
})

app.post('/StudentDirect', function(req, res) {
  res.render('student.ejs')
})

app.post('/TeacherDirect', function(req, res) {
  res.render('teacher.ejs')
})

app.get('/student', (req, res) => {
  res.render('student.ejs')
})

app.post('/student', (req, res) => {
  if(req.body.firstname !== '' || req.body.lastname !== '' || req.body.age !== '' || req.body.email !== ''){
      DataBase.insertData('./dataStudent.json', req.body.firstname, req.body.lastname, req.body.age, req.body.email)
  }
  res.redirect('/')
})


app.get('/teacher', function(req, res) {
  res.render('student.ejs')
})

app.post('/teacher', (req, res) => {
  if(req.body.firstname !== '' || req.body.lastname !== '' || req.body.age !== '' || req.body.email !== ''){
  DataBase.insertData('./dataTeacher.json', req.body.firstname, req.body.lastname, req.body.age, req.body.email)
  }
  res.redirect('/')
})

app.get("/*", (req, res) => {
  res.redirect('/')
})

app.listen(3000, function(){
});


class DataBase {
  constructor(firstname, lastname, age, email) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.age = age,
    this.email = email

  }

  static readFIle(file) {
    return new Promise (function(resolve, reject){
      fs.readFile(file, 'utf8', function(err, data) {
        if(err){
          reject(err)
        }else {
          let readData = JSON.parse(data)
          resolve(readData)
        }
      })
    })
  }

  static writeFile (file, newData) {
    return new Promise (function(resolve, reject){
      let string = JSON.stringify(newData, null, 2)
      fs.writeFile(file, string, function(err){
        if(err) {
            reject(err)
        }else{
            resolve()
        }
    })
    })
  }

  static insertData (file, firstname, lastname, age, email) {
    DataBase.readFIle(file)
      .then(function(data) {
        let newData = data
        let obj = new DataBase (firstname, lastname, age, email)
        newData.push(obj)
        return DataBase.writeFile(file, newData)
      })
      .then()
      .catch(function(err) {
        console.log(err)
      })
  }
}



