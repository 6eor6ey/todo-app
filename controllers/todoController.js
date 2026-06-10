const Todo = require('../models/todoModel');

exports.getAllTodos = (req, res) => {
    res.json(Todo.getAll());
};

exports.createTodo = (req, res) => {
    const newTask = Todo.create(req.body.text);
    res.status(201).json(newTask);
};