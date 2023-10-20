// import "./form.css";
// import { fakeData } from "./assets/Data";
// import { useState } from "react";
// function App() {
//   // console.log(fakeData);
//   const [data, setdata] = useState(fakeData);
//   const [input, setInput] = useState("");
//   const inputHandler = (e) => {
//     console.log(e.target.value);
//     setInput(e.target.value);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     const temp = { id: Math.floor(Math.random() * 100), data: input };
//     setdata((prev) => [...prev, temp]);
//   };

//   return (
//     <div className="todo">
//       <div>
//         <h1>TO DO LIST</h1>
//         <form onSubmit={submitHandler} className="form">
//           <input
//             onChange={inputHandler}
//             className="input"
//             type="text"
//             placeholder="Enter Your Goal"
//           />
//           <button type="submit">Add Task</button>
//         </form>
//         <h3>YOUR TASKS</h3>
//         <ul className="list">
//           {data.map((d) => {
//             return <li key={d.id}>{d.data}</li>;
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./form.css";
import { fakeData } from "./assets/Data";
const App = () => {
  const [data, setdata] = useState(fakeData);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const temp = { id: Math.floor(Math.random() * 100), data: input };
    setdata((prev) => [...prev, temp]);
  };  
  const deleteHandler = (id) => {
    const temp = data.filter((d) => d.id!= id);
    setdata(temp);
  };
  return (
    <div className="todo">
      <div>
        <h1>To Do List</h1>
        <form onSubmit={submitHandler} className="form">
          <input
            onChange={inputHandler}
            className="input"
            type="text"
            placeholder="Enter your goal"
          />
          <h3>Your Tasks</h3>
          <button type="submit">Add task</button>
        </form>
        <ul className="list">
          {data.map((d) => {
            return <li key={d.id} onClick={()=>deleteHandler(d.id)}>{d.data}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
