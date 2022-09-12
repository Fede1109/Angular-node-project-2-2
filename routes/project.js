'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleWare = multipart({uploadDir: './uploads'});

router.get('/home', ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
router.get('/project/:id?',ProjectController.getProject); //si pone el parametro opcional (?) hay qeu hacer el primer if de project controllers
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id',ProjectController.updateProject);
router.delete('/project/:id',ProjectController.deleteProject);
router.post('/uploadImage/:id',multipartMiddleWare,ProjectController.uploadImage);
router.get('/get-image/:image',ProjectController.getImageFile);

module.exports = router;