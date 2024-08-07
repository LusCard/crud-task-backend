import {TaskModel} from "../config/database.js"
export const control = {};

control.getTasks = async (req, res) => {
    try {
        const tasks =  await TaskModel.findAll();
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting tasks" });
    }
}

control.getOneTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error getting task" });
    }
};


control.createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;

    if (!title || title.length >= 245) {
        return res.status(400).json({ message: "Title must be less than 245 characters" });
    }
    if (!description || description.trim() === '') {
        return res.status(400).json({ message: "Description cannot be empty" });
    }
    

    try {
        const task = await TaskModel.create({ title, description,});
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating task" });
    }
};

//!Change so you can find by title
control.updateTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id)
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        await task.update(req.body)
        res.json(task)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error updating task"})
    }
}

//!same find by title
control.deleteTask = async (req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id)
        if(!task){
            return res.status(404).json({message: "Task not found"})
        }
        await task.destroy()
        res.json({message: "Task deleted"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error deleting task"})
    }
}