import { useState } from "react";
import "./App.css";
import { fakeData } from "./data";
function App() {
 const [data, setdata] = useState(fakeData);
  return (
    <div className="card">
      <div>
        <h1>To Do List</h1>
        <form className="form">
          <input type="text" placeholder="Enter your Goal" />
          <button type="submit">Add Task</button>
        </form>
        <h2>Tasks To Do</h2>
        <ul>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
