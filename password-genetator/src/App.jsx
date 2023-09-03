import { Fragment, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
    <h1 className='text-4xl text-center' style={{backgroundColor:"#fff"}}>Password Generator</h1>
    </Fragment>
  )
}

export default App
