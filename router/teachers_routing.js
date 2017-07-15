var express = require('express')
var router = express.Router()
let modelTeacher = require('../models');

router.get('/', function(req, res){
  modelTeacher.Teacher.findAll().then(teacher => {
    res.render('teachers',{dataT:teacher})
    })
  })

    router.get('/add_teachers', function(req, res){
      res.render('teachers_add')
    })

    router.post('/add_teachers', function(req, res){
      modelTeacher.Teacher.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then(() =>{
        res.redirect('/teachers')
      })
    })

    router.get('/edit/:id', function(req, res){
      modelTeacher.Teacher.findById(req.params.id)
        .then ((x) =>{
        res.render('teachers_edit', {editT:x})
      })
    })

    router.post('/edit/:id', function(req, res){
      modelTeacher.Teacher.update({
        first_name: `${req.body.first_name}`,
        last_name: `${req.body.last_name}`,
        email: `${req.body.email}`,
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
