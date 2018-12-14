const express = require('express')
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',function(req,res){
    // res.send('I love Hacktiv8')
    res.render('index.ejs')
})

app.get('/student',function(req,res){
    res.render('dataStudent.ejs')
})

app.get('/teacher',function(req,res){
    res.render('dataTeacher.ejs')
})

app.post('/student',function(req,res){
    console.log(req.body)
    // res.render('inputStudent.ejs')
    res.send(req.body)
})

app.listen(3000,function(){
    console.log(`Server listening on port 3000`)
})