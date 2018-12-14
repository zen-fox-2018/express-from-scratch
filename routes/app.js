'use strict'
const express = require('express')
const app = express()
const fs = require('fs')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res) {
    res.render('profile.ejs')
})

app.get('/student', function(req, res) {
    res.render('./studentForm.ejs')
})

app.post('/student', function(req, res) {
    fs.readFile('./studentFile.json', 'utf-8', function(err, data) {
        if (err) {
            res.send(`ERROR: ${err}`)
        } else {
            let allNewData = []
            let parseData = JSON.parse(data)
            let newData = req.body
            for (let i = 0; i < parseData.length; i++) {
                allNewData.push(parseData[i])
            }
            allNewData.push(newData)
            fs.writeFile('./studentFile.son', JSON.stringify(allNewData, null, 2), (err) => {
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
    res.render('./teachers.ejs')
})


app.listen(3000, function() {
    console.log('Server listen on port 3000')
})

//JSON View extension