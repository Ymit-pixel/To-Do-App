import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f3f4f6" }}>
      <div style={{ width: "100%", maxWidth: 400, background: "white", padding: 20, borderRadius: 12 }}>
        <h1 style={{ textAlign: "center" }}>To-Do List</h1>

        <div style={{ display: "flex", gap: 8 }}>
          <input
            style={{ flex: 1, padding: 8 }}
            placeholder="Add a task..."
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul style={{ listStyle: "none", padding: 0, marginTop: 16 }}>
          {tasks.map(task => (
            <li key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span
                onClick={() => toggleTask(task.id)}
                style={{ cursor: "pointer", textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.text}
              </span>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}