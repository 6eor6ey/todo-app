// models/todoModel.js
let todos = [
    { id: 1, text: "Learn Express routing", completed: false },
    { id: 2, text: "Connect to SQLite later", completed: false }
];

module.exports = {
    getAll: () => todos,
    create: (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        todos.push(newTask);
        return newTask;
    }
};