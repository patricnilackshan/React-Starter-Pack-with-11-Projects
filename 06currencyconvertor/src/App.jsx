import React, { useEffect, useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index.js';

function App() {
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('lkr');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  let {currencyInfo,date} = useCurrencyInfo(from);
  let options = Object.keys(currencyInfo);

  useEffect(() => {
    if (options.length > 0) {
      convert();
    }
  }, [currencyInfo, options, from, to, amount]);

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="bg-no-repeat bg-cover min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/7352057/pexels-photo-7352057.jpeg?auto=compress&cs=tinysrgb&w=1280&dpr=1)`,
      }}
    >
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 backdrop-blur-sm bg-white/30 rounded-lg shadow-lg">
        <h1 className="rounded-md bg-blue-500 text-white px-4 py-2 text-center text-xl sm:text-2xl font-bold mb-4">
          {`Convert ${from.toUpperCase()} ➡ ${to.toUpperCase()}`}
        </h1>

        <div className="relative w-full">
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
              onCurrencyChange={(currency) => {
                setFrom(currency);
              }}
              selectedCurrency={from}
              amountDisabled={false}
            />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            <button
              className="border-2 border-white rounded-full bg-blue-500 text-white px-4 py-1 shadow-md"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mt-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              selectedCurrency={to}
              amountDisabled={true}
            />
          </div>
        </div>
            <h1 className="rounded-md bg-blue-500 text-white px-4 py-2 text-center text-l sm:text-xl mt-5">
              {`Exchange Rates as of ${date}`}
            </h1>
      </div>
    </div>
  );
}

export default App;
