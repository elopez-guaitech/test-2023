const { tasksModel } = require('./../database/models/tasks.model');

const getAllTasks =  async () =>{
    const allTasks = await tasksModel.findAll();
    return allTasks;
}

const getOneTasks = async (id) =>{
    const oneTasks = await tasksModel.findByPk(id);
    return oneTasks;
}

const createTask = async (body) =>{
    const newTasks = await tasksModel.create(body)
}

const updateTask = async (id, body) =>{
    const updateOneTasks = await tasksModel.update(body,{
        where: {id:id}
    })
    return updateOneTasks
}

const deleteTask = async (id) =>{
    const deleteTasks = await tasksModel.destroy({
        where: {id:id}
    })
    return deleteTask
}

module.exports = {
    getAllTasks,
    getOneTasks,
    createTask,
    updateTask,
    deleteTask
}