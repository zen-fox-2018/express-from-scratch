const express = require('express');
const app = express();
const fs = require('fs')
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.listen(3000, function() {
    console.log("you are now on port 3000")
})
app.get('/', function(req, res) {
    res.render('profile')
    // res.send("This is the school profile")
})
app.get('/student', function(req, res) {
    res.render('student')
})
app.post('/student', function(req, res) {
    fs.readFile('./student.json', 'utf8', function(err, theData) {
        if (err) {
            res.send(err)
        } else {
            let allData = [];
            let dataInArr = JSON.parse(theData);
            let inputData = req.body;
            for (let i = 0; i <= dataInArr.length-1; i++) {
                allData.push(dataInArr[i]);
            }
            allData.push(inputData);
            let dataToWrite = JSON.stringify(allData, null, 2)
            fs.writeFile('./student.json', dataToWrite, function(err) {
                if (err) {
                    res.send(err)
                } else {
                    res.redirect('/')
                }
            })
        }
    })   
})
app.get('/teachers', function(req, res) {
    res.render('teacher')
})