const API_URL = 'http://localhost:3000/api/todos';

async function fetchTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();
    const list = document.getElementById('todoList');
    
    list.innerHTML = todos.map(t => `
    <li>
        <input type="checkbox" ${t.completed ? 'checked' : ''} 
               onchange="toggleTodo(${t.id}, ${t.completed})">
        
        <span style="text-decoration: ${t.completed ? 'line-through' : 'none'}">
            ${t.text}
        </span>
        
        <button class="delete-btn" onclick="deleteTodo(${t.id})">Delete</button>
    </li>
`).join('');
}

async function addTodo() {
    const input = document.getElementById('todoInput');
    if (!input.value) return;
    
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input.value })
    });
    input.value = '';
    fetchTodos();
}

async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTodos();
}

async function toggleTodo(id, currentStatus) {
    const newStatus = currentStatus ? 0 : 1;
    
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ completed: newStatus })
    });

    if (!response.ok) {
        console.error("Server returned an error:", response.status);
        return;
    }

    await fetchTodos();
}

fetchTodos();