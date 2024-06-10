import React from 'react';

function InputBox({
  label,
  amount,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  selectedCurrency = 'usd',
  amountDisabled = false,
}) {
  return (
    <div className="bg-white p-4 rounded-lg text-sm flex flex-col sm:flex-row shadow-md">
      <div className="w-full sm:w-1/2 sm:pr-2 mb-4 sm:mb-0">
        <label htmlFor="amount" className="text-gray-600 mb-2 inline-block">
          {label}
        </label>
        <input
          id="amount"
          type="number"
          className="outline-none w-full bg-transparent py-2 px-3 rounded-lg border border-gray-300 focus:border-blue-500"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="w-full sm:w-1/2 sm:pl-2 flex flex-col">
        <label htmlFor="currency" className="text-gray-600 mb-2">
          Currency Type
        </label>
        <select
          id="currency"
          className="rounded-lg py-2 px-3 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:border-blue-500"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
