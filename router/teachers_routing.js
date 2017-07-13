var express = require('express')
var router = express.Router()
let modelTeacher = require('../models');

router.get('/', function(req, res){
  modelTeacher.Teacher.findAll().then(teacher => {
    res.render('teachers',{dataT:teacher})
    })
  })

module.exports = router
