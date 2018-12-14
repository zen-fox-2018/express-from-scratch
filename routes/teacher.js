const route = require(`express`).Router()
const ControllerTeacher = require(`../Controllers/ControllerTeacher`)
const Model = require(`../models`)
const Teacher = Model.Teacher
route.get('/', (req, res) => {
    Teacher.findAll().then((result) => {
        res.render(`./teacher/index.ejs`, {
            data: result,
            page: `teacher`
        })
    }).catch((err) => {
        res.send(err)
    });
});

//wajib
module.exports = route