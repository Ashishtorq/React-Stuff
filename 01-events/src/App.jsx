import React, { Fragment, useState ,useEffect} from "react";
import "./App.css";
import Student from "./Student";
const App = () => {
  const [name, setName] = useState(100);
  const [datas, setData] = useState(0);
  useEffect(()=>{
    console.warn("This is me");
  },[datas])
  return (
    <Fragment>
     <h1>Datas : {datas}</h1>
     <h1>name : {name}</h1>
     <button onClick={()=>setData(datas+1)}>+++++</button>
     <button onClick={()=>setName(name-1)}>----</button>
     
    </Fragment>
  );
};

export default App;
