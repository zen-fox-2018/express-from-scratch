
const express = require("express");
const app = express();
const port = 3000;
const studentData = require("./data.json")

app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("home.ejs")
})

app.get("/student", function(req, res) {
    res.render("studentForm.ejs")
})

app.post("/student", function(req, res) {
    res.send(req.body)
})

app.get("/teachers", function(req, res) {

    res.render("teachers.ejs")
})
app.listen(port, () => {
    console.log(`Running local host through port ${port} ...`)
})