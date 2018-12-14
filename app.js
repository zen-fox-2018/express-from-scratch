'use strict'
let teachers = [
    {
        name: 'gon',
        age: 18
    }, {
        name: 'luffy',
        age: 20
    }
]
let students = []

const express = require('express')
const app = express()
const home = require('./routes/index')
const student = require('./routes/student')
const teacher = require('./routes/teacher')

const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    // res.send('i love hacktiv8')
    res.render('home.ejs')
})

app.get('/student', (req, res) => {
    res.render('student.ejs')
})
app.post('/student', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    students.push({name: name, age: age})
    res.redirect('/')
})

app.get('/teacher', (req, res) => {
    res.render('teacher.ejs', {data: teachers})
})

app.get('/*', (req, res) => {
    res.send('PAGE NOT FOUND')
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
})
