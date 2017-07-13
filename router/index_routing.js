var express = require('express')
var router = express.Router()
let modelIndex = require('../models');

router.get('/', function(req, res){
  modelTeacher.Teacher.findAll()
    .then((params) => {
    res.render('teachers',{dataT:rows})
    })
  })

module.exports = router
