import React, { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('lkr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(from)
  let options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = (from,to) =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className='bg-no-repeat bg-cover h-screen w-full flex-wrap flex items-center justify-center' style={{backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border body-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/20'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(amount)=>{setAmount(amount)}}
              onCurrencyChange={(currency)=>{setFrom(currency)}}
              selectedCurrency={from}
              amoundDisabled={false}
              currencyDisabled={false}
              />
        </div>
        <div className='relative w-full h-0.5'>
          <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
        </div>
            <div className='w-full mb-1'>
              <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>{setTo(currency)}}
              selectedCurrency={to}
              amoundDisabled={true}
              />
            </div>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' type='submit'>{`Convert`}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App