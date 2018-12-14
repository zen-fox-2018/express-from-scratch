const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/',(req, res) => {
    res.send('SCHOOL HOME')
})

app.get('/student', (req, res) => {
    res.render('form.ejs')
})

app.post('/student', (req, res) => {
    res.send(req.body)
})

app.get('/teacher', (req, res) => {
    const data = [
        {id: 1, name: 'Asno'},
        {id: 2, name: 'Asni'},
        {id: 3, name: 'Asna'},
        {id: 4, name: 'Asnu'},
        {id: 5, name: 'Asne'}
    ]
    res.send(data)
})

app.listen(3000, () => {
    console.log('RUNNING ON PORT .... 3000')
})