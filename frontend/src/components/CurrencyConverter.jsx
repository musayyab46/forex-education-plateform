import { useState } from 'react';

const CurrencyConverterCard = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState(null);

  const currencyOptions = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CAD', 'AUD'];

  const handleConvert = async () => {
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await res.json();
      const rate = data.rates[toCurrency];
      setResult((amount * rate).toFixed(2));
    } catch {
      setResult('Error fetching rate');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-gradient-to-tr from-gray-100 via-white to-gray-50 rounded-3xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-wide">
        Currency Converter
      </h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="w-full px-4 py-3 mb-6 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
      />

      <div className="flex items-center gap-4 mb-6">
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="flex-1 px-4 py-3 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>

        <span className="text-2xl font-bold text-gray-700 select-none">→</span>

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="flex-1 px-4 py-3 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <button
        onClick={handleConvert}
        className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition-transform duration-150"
      >
        Convert
      </button>

      {result && (
        <p className="mt-8 text-center text-xl font-semibold text-indigo-700 select-none">
          {amount} {fromCurrency} = <span className="text-indigo-900">{result} {toCurrency}</span>
        </p>
      )}
    </div>
  );
};

export default CurrencyConverterCard;
