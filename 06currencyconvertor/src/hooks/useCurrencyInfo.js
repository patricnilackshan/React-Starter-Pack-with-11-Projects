import { useEffect, useState } from 'react';

function useCurrencyInfo(from) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  const [date, setDate] = useState('Not Available');

  useEffect(() => {
    const data = fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`)
    .then((res)=>res.json())
    .then((res)=>{
      setDate(res["date"])
      return setCurrencyInfo(res[from])});

  }, [from]);

  return {currencyInfo,date};
}

export default useCurrencyInfo;
