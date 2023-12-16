const express = require('express');
const router = express.Router();
const tasksController = require('./../../controllers/tasks.controller')


router
    .get('/', tasksController.getAllTasks)
    .get('/:id', tasksController.getOneTasks)
    .post('/', tasksController.createTask)
    .patch('/:id', tasksController.updateOneTasks)
    .delete('/:id', tasksController.deleteTasks)

module.exports =  router;
