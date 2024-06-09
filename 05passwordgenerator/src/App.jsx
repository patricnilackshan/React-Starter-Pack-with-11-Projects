import React, { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  // useState
  const [length,setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [numbersAllowed,setNumbersAllowed] = useState(false)
  const [symbolsAllowed,setSymbolsAllowed] = useState(false)


  // Make passwordRef to refer the input text element
  const passwordRef = useRef(null)


  // Using useEffect React hook to run generatePassword() whenever 
  // values of length,numbersAllowed,symbolsAllowed changes
  useEffect(() => {
    generatePassword()
  },[length,numbersAllowed,symbolsAllowed])


  // useCallback to memorize the function unless the values of 
  // length,numbersAllowed,symbolsAllowed changes
  let generatePassword = useCallback(()=>{
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed){
      str += "0123456789"
    }

    if (symbolsAllowed){
      str += "!@#$%^&*()_-=+{}[]|;:,.<>\\/?\"'`~"
    }

    for (let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)    
  },[length,numbersAllowed,symbolsAllowed])


  // HTML Body
  return (

    <div className='bg-purple-200 min-h-screen flex items-center justify-center'>
      
      <div className='bg-white p-8 rounded-md shadow-md'>
        
        <h1 className='text-3xl font-bold text-purple-900 mb-4'>Password Generator</h1>
        
        <div className='flex rounded-md mt-2'>
          
          <input 
            className='outline-none rounded-l-md px-3 py-2 w-full text-purple-900 bg-purple-50 border border-purple-300'
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}/>

          <button 
            className='outline-none bg-purple-700 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'
            onClick={()=>{
              window.navigator.clipboard.writeText(password)
              passwordRef.current.select()
            }}>COPY</button>
        
        </div>

        <div className='flex gap-x-1 items-center'>
          <input
            type='range'
            min={6}
            max={30}
            value={length}
            className='cursor-pointer mt-5'
            onChange={(e) => setLength(e.target.value)}
          />

          <label className='mt-5' htmlFor='length'>
            Length: 
            <span className='font-bold'>{length.toString().padStart(2,0)}</span>
          </label>

          <input
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numbers" 
            className='ml-4 mt-6'
            onChange={()=>setNumbersAllowed(prev => !prev)}
          />
          <label className='mt-5' htmlFor="numbers">Numbers</label>

          <input
            type="checkbox"
            defaultChecked={symbolsAllowed}
            id="symbols" 
            className='ml-2 mt-6'
            onChange={()=>setSymbolsAllowed(prev => !prev)}
          />
          <label className='mt-5' htmlFor="symbols">Symbols</label>
        
        </div>

      </div>

    </div>
    
  )
}

export default App