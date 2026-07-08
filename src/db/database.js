const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

// Get the path from .env or default to src/db/todos.db
const dbPath = process.env.DB_PATH || path.resolve(__dirname, 'todos.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create the table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT,
            completed INTEGER DEFAULT 0
        )`);
    }
});

module.exports = db;