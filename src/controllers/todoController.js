const Todo = require('../models/todoModel');

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.getAll();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const newTask = await Todo.create(req.body.text);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.delete(req.params.id);
        res.status(204).send();
    } catch (err) { res.status(500).json({ error: "Delete failed" }); }
},
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        // ensures passing right variables
        await Todo.update(id, completed);

        // send a response and return to end the function
        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Controller Error:", err);
        if (!res.headersSent) {
            res.status(500).json({ error: "Failed to update" });
        }
    }
};