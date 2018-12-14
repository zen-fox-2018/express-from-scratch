const express = require(`express`)
const app = express()
const teacher = require(`./routes/teacher`)
const student = require(`./routes/student`)

app.set('view engine', 'ejs');
app.set(express.urlencoded({
    extended: true
}))
app.set(express.json())
app.get('/', (req, res) => {
    res.render(`index.ejs`)
});

app.use(`/teacher`, teacher)
app.use(`/student`, student)

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});