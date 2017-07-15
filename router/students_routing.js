var express = require('express')
var router = express.Router()
let modelStudent = require('../models');

router.get('/', function(req, res){
  modelStudent.Student.findAll()
  .then(student => {
    // console.log(student);
    res.render('students',{dataS:student})
    // res.send("Coba  uhyuy")
    })
  })

  router.get('/add_students', function(req, res){
    res.render('students_add')
  })

  router.post('/add_students', function(req, res){
    modelStudent.Student.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      createdAt: new Date(),
      updatedAt: new Date(),
      jurusan: req.body.jurusan
    }).then(() =>{
      res.redirect('/students')
    })
  })

  router.get('/edit/:id', function(req, res){
    modelStudent.Student.findById(req.params.id)
      .then ((x) =>{
      res.render('students_edit', {editS:x})
    })
  })

  router.post('/edit/:id', function(req, res){
    modelStudent.Student.update({
      first_name: `${req.body.first_name}`,
      last_name: `${req.body.last_name}`,
      email: `${req.body.email}`,
      jurusan: `${req.body.jurusan}`,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      where: {
        id:`${req.params.id}`
      }
    }).then(() =>{
      res.redirect('/students')
    })
  })

  router.get('/delete/:id', function(req, res){
    modelStudent.Student.destroy({
      // first_name: req.body.first_name,
      // last_name: req.body.last_name,
      // email: req.body.email,
      // createdAt: new Date(),
      // updatedAt: new Date(),
      // jurusan: req.body.jurusan
      where:{id:`${req.params.id}`}
    }).then(() =>{
      res.redirect('/students')
    })
  })

module.exports = router
