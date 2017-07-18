const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())
app.set('view engine','ejs')

//================================================================
let indexRoot = require("./router/index_routing");

let teachersRoot = require("./router/teachers_routing");
let teachersModel = require("./models/teacher")

let subjectsRoot = require("./router/subjects_routing");
let subjectsModel = require("./models/subject")

let studentsRoot = require("./router/students_routing")
let studentsModel = require("./models/student")

app.use('/', indexRoot)
app.use('/teachers', teachersRoot)
app.use('/subjects', subjectsRoot)
app.use('/students', studentsRoot)

//=================================================================

app.listen(3030);
