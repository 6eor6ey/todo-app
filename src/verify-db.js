const Todo = require('./models/todoModel');

async function test() {
    console.log("Running test...");
    // Add a dummy task
    await Todo.create("Test Task: Verify Database Connection");
    console.log("Dummy task added.");

    // Fetch all tasks
    const todos = await Todo.getAll();
    console.log("Current Database State:", todos);
}

test();