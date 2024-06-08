import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='font-bold text-3xl bg-green-500 mb-10 p-3 rounded-md'>Players</h1>
      <Card username="Patric"/>
      <Card username="Nilackshan"/>
    </>
  )
}

export default App