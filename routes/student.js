const express = require(`express`)
const app = express.Router()
const Model = require(`../models`)
const Student = Model.Student

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render(`./student/student.ejs`, {
        page: `student`,
        data: `true`
    })
});

app.post('/', (req, res) => {
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        birthday: req.body.birthday,
        email: req.body.email,
        phone: req.body.phone
    }).then((result) => {
        res.redirect(`/student/list`)
    }).catch((err) => {
        
    });
    // res.send(req.body)
});

app.get('/list', (req, res) => {
    Student.findAll().then((result) => {
        res.render(`./student/list_student`, {
            data: result,
            page: `student`
        })
    }).catch((err) => {
        
    });
});


module.exports = app