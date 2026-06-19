// Load variables from .env
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 3000 if not defined

// Uses DB_PATH as variable
const DB_PATH = process.env.DB_PATH || 'src/db/todos.db';

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});