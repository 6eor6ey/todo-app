import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    fetch('/api/todos').then(res => res.json()).then(setTodos)
  }, [])

  const addTodo = async (e) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newTodo })
    })
    if (res.ok) {
      const added = await res.json()
      setTodos([...todos, added])
      setNewTodo('')
    }
  }

  const toggleTodo = async (id, currentStatus) => {
    // handling SQLite 0/1 boolean format
    const newStatus = currentStatus === 1 || currentStatus === true ? 0 : 1
    const res = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: newStatus })
    })
    if (res.ok) {
      setTodos(todos.map(t => t.id === id ? { ...t, completed: newStatus } : t))
    }
  }

  const deleteTodo = async (id) => {
    const res = await fetch(`/api/todos/${id}`, { method: 'DELETE' })
    if (res.ok) {
      setTodos(todos.filter(t => t.id !== id))
    }
  }

  return (
    <div id="todo-container">
      <h1>My Todo App</h1>
      <form onSubmit={addTodo}>
        <input 
          id="todoInput"
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="New todo..." 
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input 
              type="checkbox" 
              checked={!!todo.completed} 
              onChange={() => toggleTodo(todo.id, todo.completed)} 
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button 
              className="delete-btn" 
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App