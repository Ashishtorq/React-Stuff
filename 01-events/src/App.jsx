import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [name,setName] = useState("ashish");
  function data (){
    setName("Singh");
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={data}>{name}</button>
    </div>
  )
}

export default App
