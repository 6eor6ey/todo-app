const db = require('./database'); 

db.serialize(() => {
    db.run("INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)", 
        ['testuser', 'password123'], 
        (err) => {
            if (err) {
                console.error("Error adding user:", err.message);
            } else {
                console.log("Test user 'testuser' added successfully!");
            }
        }
    );
});