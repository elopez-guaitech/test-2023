import express from "express";
import { createTask, deleteTask, getAllTask, updateStatusTask } from "../controller/TaskController.js";
// import { createBlog, getAllBlogs, getBlog, updateBlog, deleteBlog } from "../controllers/BlogController.js"

const router = express.Router()

router.get('/', getAllTask)
router.post('/', createTask)
router.put('/:id', updateStatusTask)
router.delete('/:id', deleteTask)

export default router
