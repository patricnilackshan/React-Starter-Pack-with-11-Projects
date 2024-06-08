import { useState } from "react";

function App() {
  const [counter,setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>React Course with PATRIC {counter}</h1>
    <h2>Counter : {counter} </h2>
    <button onClick={addValue}>Add Value</button>{" "}
    <button onClick={removeValue}>Remove Value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
