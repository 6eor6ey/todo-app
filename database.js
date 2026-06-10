// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./todos.db', (err) => {
    if (err) console.error('Error opening database', err);
    else console.log('Connected to SQLite database');
});

// Initializes the table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    completed BOOLEAN DEFAULT 0
)`);

module.exports = db;