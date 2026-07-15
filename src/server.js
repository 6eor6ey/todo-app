// load variables from .env
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes'); // import new auth routes

const app = express();
const PORT = process.env.PORT || 3000;

// uses DB_PATH as variable
const DB_PATH = process.env.DB_PATH || 'src/db/todos.db';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

console.log("todoRoutes is function?", typeof todoRoutes === 'function');
console.log("authRoutes is function?", typeof authRoutes === 'function');

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes); // mount the auth routes

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});