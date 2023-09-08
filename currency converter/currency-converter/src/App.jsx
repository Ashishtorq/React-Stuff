import { Fragment, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <h1 className='text-3xl bg-orange-700'>Currency App</h1>
    </Fragment>
  )
}

export default App
