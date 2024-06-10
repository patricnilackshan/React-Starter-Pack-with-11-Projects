// This line imports the CSS styles for this component from 'App.css'.
import './App.css'

// This line imports the 'Card' component from the 'components/Card' file.
import Card from './components/Card'

// This is a functional component in React named 'App'.
function App() {
  // The component returns a JSX (JavaScript XML) element.
  // JSX allows us to write HTML-like syntax in our JavaScript code which makes it easier to understand and write.
  return (
    <>
    <h1 className='font-bold text-3xl bg-green-500 mb-10 p-3 rounded-md'>Players</h1>
    <Card username="Patric"/>
    <Card username="Nilackshan"/>
    </>
  )
}

// The 'App' component is exported so it can be imported and used in other parts of the application.
export default App