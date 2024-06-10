// This line imports the useState hook from React. This hook is used to add state to functional components.
import { useState } from "react";

// This is a functional component in React named 'App'.
function App() {
  // The useState hook is called with the initial value of 15. It returns an array with two elements: the current state value and a function to update it.
  // These are destructured into the variables 'counter' and 'setCounter'.
  const [counter,setCounter] = useState(15)

  // This is a function that increments the 'counter' state value by 1.
  const addValue = () => {
    setCounter(counter + 1)
  }

  // This is a function that decrements the 'counter' state value by 1.
  const removeValue = () => {
    setCounter(counter - 1)
  }

  // The component returns a JSX (JavaScript XML) element.
  // JSX allows us to write HTML-like syntax in our JavaScript code which makes it easier to understand and write.
  return (
    <>
    <h1>React Course with PATRIC</h1>
    <h2>Counter : {counter} </h2>
    <button onClick={addValue}>Add Value</button>{" "}
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

// The 'App' component is exported so it can be imported and used in other parts of the application.
export default App