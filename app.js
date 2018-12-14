'use strict'
const fs = require("fs")

const express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res){
    res.render('home.ejs')
})

app.get('/student', function(req, res){
    res.render('student_form.ejs')
})

app.get('/teacher', function(req, res){
    res.render('teachers.ejs')
})

app.post('/student', function(req, res){
    fs.readFile('./students.json', 'utf8', function(err, data){
        if(err){
            console.log(err)
            res.send(err)
        }   else{
            
            let parsedData= JSON.parse(data)
            let arrData = []

            parsedData.forEach(element => {
                arrData.push(element)
            });
            arrData.push(req.body)

            fs.writeFile('./students.json', JSON.stringify(arrData, null, 2), function(err){
               if(err){
                   console.log(err)
                   res.send(err)
               } else{
                   console.log(req.body)
                   res.redirect('/')
               }
            })
        }
    })
    
})

app.listen(3000)

