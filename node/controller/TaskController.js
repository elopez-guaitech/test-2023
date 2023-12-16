import Taskmodel from "../models/TaskModel.js";


export const getAllTask = async (req, res) => {
        try {
                const task = await Taskmodel.findAll()
                res.json(task)
        } catch (error) {
                res.json({
                        "message": "Error al consultar tareas",
                        "error" : error
                })
        }
}

export const deleteTask = async (req, res) => {
        try {
                const task = await Taskmodel.destroy({
                        where : {id: req.params.id}
                })
                res.json({
                        "message": "Tarea Eliminada"
                })
        } catch (error) {
                res.json({
                        "message": "Error al eliminar la tarea"
                })
        }
}

export const updateStatusTask = async (req, res) => {
        try {
                const task = await Taskmodel.update(req.body, {
                        where : {id: req.params.id}
                })
                res.json({
                        "message": "Tarea Modificada"
                })
        } catch (error) {
                res.json({
                        "message": "Error al modificar la tarea"
                })
        }
}

export const createTask = async (req, res) => {
        try {
                const task = await Taskmodel.create(req.body)
                res.json({
                        "message": "Tarea Creada"
                })
        } catch (error) {
                res.json({
                        "message": "Error al crear la tarea"
                })
        }
}