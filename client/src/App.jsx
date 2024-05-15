import { useEffect, useState } from "react";

function App() {
  
  const [todos, setTodos] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('/api/v1/tasks');
      const todos = await res.json()

      setTodos(todos)
    }
    getTodos()
  },[])

  



  return (
    <main className="container">
      <h1 className="title">Get Things Done !</h1>
      <form>
        <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="✍️  Add Item..."
        className="input-box"
        required 
        />
      </form>
      <div className="Tasks">
        {(todos.length > 0) && 
        todos.map((todo) => (
          <div key={todo._id} className="task">{todo.task}</div>
        ))}
      </div>   
    </main>
  );
}

export default App;
