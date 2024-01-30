import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button
      onClick={addValue}
      >Add value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
