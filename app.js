const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.get('/', function (req,res) {
    res.send('Hello world')
})

app.listen(port, function(){
    console.log(`listening to ${port}`)
}) 

app.get('/home', function (req,res) {
    res.render('view.ejs')
})
app.get('/about', function (req,res) {
    res.render('about.ejs')
})

app.post('/home', function(req, res){
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

