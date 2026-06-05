const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// allows server to process JSON and talk to a frontend
app.use(cors());
app.use(express.json());

// in memory database
let todos = [
    { id: 1, text: "Learn Express routing", completed: false },
    { id: 2, text: "Connect to SQLite later", completed: false }
];

// api routes

// READ (GET): Fetch all tasks
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// CREATE (POST): Add a new task
app.post('/api/todos', (req, res) => {
    const newTask = {
        id: Date.now(), // Generate a quick fake ID based on the current time
        text: req.body.text, // Extract the text the user typed
        completed: false
    };
    
    todos.push(newTask); // Save it to our array
    res.status(201).json(newTask); // Send the new task back to prove it worked
});

// starts the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Test the API at http://localhost:${PORT}/api/todos`);
});