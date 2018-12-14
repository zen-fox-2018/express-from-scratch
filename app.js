const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))


app.listen(5000, function () {
    console.log('server listen on port 5000');   
})

app.get("/", (req,res) => {
    res.render("home.ejs")
})

app.get('/student', (req, res) => {
    res.render('studentForm.ejs')
})

app.get('/Teacher', (req, res) => {
    res.render('teacher.ejs')
})


app.post('/student', (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    res.render("student.ejs", {data:req.body})
})

app.get("/*", (req, res) => {
    res.redirect('/home')
})
