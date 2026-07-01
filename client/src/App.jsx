import { useEffect, useState } from 'react'

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
    const newStatus = currentStatus === 1 ? 0 : 1
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
    <div style={{ padding: '20px' }}>
      <h1>My Todo App</h1>
      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="New todo..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '10px' }}>
            <span 
              onClick={() => toggleTodo(todo.id, todo.completed)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App