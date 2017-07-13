var express = require('express')
var router = express.Router()
let modelSubject = require('../models');

router.get('/', function(req, res){
  modelSubject.Subject.findAll().then(subject => {
    res.render('subjects',{dataS:subject})
    })
  })

module.exports = router
