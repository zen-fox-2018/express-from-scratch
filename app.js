const express = require('express') 
const app = express()
const port = 3000
let data = [
  {name: 'Sia', subject: 'ipa'}, 
  {name: 'Xoxo', subject: 'math'},
  {name: 'dodi', subject: 'ips'}
]

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/student', (req, res) => {
  res.render('form.ejs')
})

app.post('/student', (req, res) => {
  let student = req.body
  res.render('student.ejs', {student})
})

app.get('/teachers' , (req, res) => {
  res.render('teacher.ejs', {data})
})

app.get('/*' , (req, res) => {
  res.render('home.ejs')
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
