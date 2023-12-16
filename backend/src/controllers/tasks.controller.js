const tasksService = require('./../service/tasks.service');

const getAllTasks = async (req, res) =>{
    const allTasks = await tasksService.getAllTasks();
    return res.status(201).json(allTasks)
}

const getOneTasks = async (req, res) =>{
    const { id } = req.params;
    const task = await tasksService.getOneTasks(id);
    return res.json(task);
}

const createTask = async (req, res) =>{
    const body = req.body;
    const createdTask = await tasksService.createTask(body);
    return res.status(201).json(createdTask);
}

const updateOneTasks = async (req, res) =>{
    const { id } = req.params;
    const body = req.body;
    const updatedTasks = await tasksService.updateTask(id, body);
    return res.status(201).json(updatedTasks)
}

const deleteTasks = async (req, res) =>{ 
    const { id } = req.params;
    const deletedTask = await tasksService.deleteTask(id)
    return res.status(201).json(deletedTask);
}

module.exports = {
    getAllTasks,
    getOneTasks,
    createTask,
    updateOneTasks,
    deleteTasks
}