const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())
app.set('view engine','ejs')

let teachersRoot = require("./router/teachers_routing");
let teachersModel = require("./models/teacher")

let subjectsRoot = require("./router/subjects_routing");
let subjectsModel = require("./models/subject")

app.use('/teachers', teachersRoot)
app.use('/subjects', subjectsRoot)


app.listen(3000);
