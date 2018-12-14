const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const port = 3000

const objTeacher= [{
    name:'Dadang',
    teaching:'Math'
},{
    name:'Lolu',
    teaching:'Science'
},{
    name:'Nono',
    teaching:'Computer'
}]


app.set('view engine', 'ejs')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.get('/student',(req, res)=> {
    res.render('students.ejs')
})

app.post('/student', (req, res)=> {
    console.log(req.body);
    res.redirect('/')
})

app.get('/teacher', (req,res)=> {
    res.render('teacher.ejs', {dataSend :objTeacher} )
})









app.listen(port , () => console.log(`Server running in port ${port}`))