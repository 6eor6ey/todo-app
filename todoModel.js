const db = require('../database');

module.exports = {
    // Use of Promise here because database operations are ASYNCHRONOUS
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM todos", [], (err, rows) => {
                if (err) reject(err);
                resolve(rows);
            });
        });
    },

    create: (text) => {
        return new Promise((resolve, reject) => {
            db.run("INSERT INTO todos (text) VALUES (?)", [text], function(err) {
                if (err) reject(err);
                resolve({ id: this.lastID, text, completed: 0 });
            });
        });
    },
    
update: (id, completed) => {
    return new Promise((resolve, reject) => {
        db.run("UPDATE todos SET completed = ? WHERE id = ?", [completed, id], (err) => {
            if (err) reject(err);
            resolve({ id, completed });
        });
    });
},

delete: (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM todos WHERE id = ?", [id], (err) => {
            if (err) reject(err);
            resolve({ message: "Deleted" });
        });
    });
}
};

