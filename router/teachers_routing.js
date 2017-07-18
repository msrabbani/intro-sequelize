var express = require('express')
var router = express.Router()
let modelTeacher = require('../models');

router.get('/', function(req, res){
  modelTeacher.Teacher.findAll({
    include:[modelTeacher.Subject]
  })
  .then(teacher => {
    modelTeacher.Teacher.findAll({
      include:[modelTeacher.Subject]
    })
    res.render('teachers',{dataT:teacher})
  })
})

    router.get('/add_teachers', function(req, res){
      modelTeacher.Subject.findAll()
        .then((subject) => {
          res.render('teachers_add', {data_sub:subject})
        })
      })

    router.post('/add_teachers', function(req, res){
      modelTeacher.Teacher.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        SubjectId :req.body.dropDown,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(() =>{
        res.redirect('/teachers')
      })
    })

    router.get('/edit/:id', function(req, res){
      modelTeacher.Teacher.findById(req.params.id)
      .then((teacher) =>{
        modelTeacher.Subject.findAll()
        .then ((subject) =>{
            res.render('teachers_edit', {data_teach:teacher, data_sub:subject})
        })
      })
    })

    router.post('/edit/:id', function(req, res){
      modelTeacher.Teacher.update({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`,
        SubjectId: `${req.body.dropDown}`,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        where: {
          id:`${req.params.id}`
        }
      }).then(() =>{
        res.redirect('/teachers')
      })
    })

    router.get('/delete/:id', function(req, res){
      modelTeacher.Teacher.destroy({
        where:{id:`${req.params.id}`}
      }).then(() =>{
        res.redirect('/teachers')
      })
    })

  module.exports = router
