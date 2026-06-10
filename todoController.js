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

exports.updateTodo = async (req, res) => {
    try {
        await Todo.update(req.params.id, req.body.completed);
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.delete(req.params.id);
        res.json({ success: true });
    } catch (err) { res.status(500).json({ error: err.message }); }
};