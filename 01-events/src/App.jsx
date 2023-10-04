import React, { Fragment, useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./Student";
import Button from "react-bootstrap/Button";
import './App.css'
 const App = () => {
//   const [name, setName] = useState(100);
//   const [datas, setData] = useState(0);
//   useEffect(()=>{
//     console.warn("This is me");
//   },[datas])
const st = ['ashish','anil','singh'];
st.map((e)=>{
  console.warn("Name : ", e);
})
for(let i=0; i<st.length; i++){
  console.warn("Name in loop : ",st[i])
}
  return (
    <Fragment>
     
    </Fragment>
  );
};

export default App;
