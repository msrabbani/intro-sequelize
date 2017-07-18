var express = require('express')
var router = express.Router()
let modelSubject = require('../models')

router.get('/', function(req, res){
  modelSubject.Subject.findAll({
    include:[modelSubject.Teacher]
  })
  .then(data => { //ini adalh promise dengan callback
    console.log(data)
    res.render('subjects', {dataST:data})
  })
})

module.exports = router
