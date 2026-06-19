const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'todos.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error('Error opening database', err);
    else console.log('Connected to SQLite database at:', dbPath);
});
// initializes table if it doesn't exist and forces it
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT,
        completed BOOLEAN DEFAULT 0
    )`, (err) => {
        if (err) {
            console.error("Table creation failed:", err.message);
        } else {
            console.log("Table 'todos' is ready!");
        }
    });
});
module.exports = db;