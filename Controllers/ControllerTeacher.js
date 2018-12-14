const Model = require(`../models`)
const Teacher = Model.Teacher

class ControllerTeacher {
    static findAll(req, res) {
        Teacher.findAll().then((result) => {
            res.render(`./teacher/index.ejs`, {
                data: result,
                page: `teacher`
            })
        }).catch((err) => {
            res.send(err)
        });
    }
}

module.exports = ControllerTeacher
