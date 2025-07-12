import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const currencies = ["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD"];

export default function LiveRatesPage() {
  const [rates, setRates] = useState({});
  const [base, setBase] = useState("USD");
  const [timestamp, setTimestamp] = useState("");
  
  const navigate=useNavigate();
  
  const fetchRates = async () => {
      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
        const data = await res.json();
        setRates(data.rates);
        setTimestamp(new Date().toLocaleString());
      } catch (err) {
        console.error("Error fetching rates", err);
      }
    };
  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 30000); // update every 30s
    return () => clearInterval(interval);
  }, [base]);
    function handleClick(){
        fetchRates();
    }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Live Forex Rates</h1>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition" onClick={handleClick}>
  {/* Refresh Icon */}
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M4.582 9A7.5 7.5 0 0120 15.418M19.418 15A7.5 7.5 0 014 8.582" />
  </svg>
  <span>Refresh</span>
</button>
</div>

      {/* Base Currency Selector */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">Base Currency:</label>
        <select
          className="ml-2 px-3 py-1 border rounded-md"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        >
          {currencies.map((cur) => (
            <option key={cur} value={cur}>{cur}</option>
          ))}
        </select>
      </div>

      {/* Timestamp */}
      <p className="text-gray-500 text-sm mb-4">Last updated: {timestamp}</p>

      {/* Rates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Object.entries(rates).slice(0, 20).map(([currency, rate]) => (
          <div key={currency} className="bg-white shadow-md p-4 rounded-md">
            <p className="text-lg font-semibold">{currency}</p>
            <div className="flex item-center justify-between mb-4">
            <p className="text-gray-700">1 {base} = <span className="text-blue-600 font-bold">{rate.toFixed(2)}</span></p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{navigate(`/chart/${base}/${currency}`)}}>View Chart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
