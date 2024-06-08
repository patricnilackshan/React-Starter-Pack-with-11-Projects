import React from 'react'
import { useState } from 'react'

function App() {
    const [color,setColor] = useState('bg-slate-700')

  return (
    <div className={`flex items-center justify-center w-full h-screen ${color}`}>
        <div className='bg-stone-600 px-2 py-3 rounded-lg'>
            <button className='font-bold text-white bg-red-500 mx-1 px-2 py-1 rounded-lg' onClick={()=>setColor('bg-red-500')}>RED</button>
            <button className='font-bold text-white bg-green-500 mx-1 px-2 py-1 rounded-lg' onClick={()=>setColor('bg-green-500')}>GREEN</button>
            <button className='font-bold text-white bg-blue-500 mx-1 px-2 py-1 rounded-lg' onClick={()=>setColor('bg-red-500')}>BLUE</button>
        </div>
    </div>
  )
}

export default App