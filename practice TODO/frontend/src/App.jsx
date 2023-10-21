import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>To Do List</h1>
      <form className="form">
        <input type="text" placeholder="Enter your Goal" />
        <button type="submit">Add Task</button>
      </form>
      <h2>Tasks To Do</h2>
      <ul>
        <li>Data Structure</li>
        <li>OOPS</li>
        <li>DAA</li>
      </ul>
    </div>
  );
}

export default App;
