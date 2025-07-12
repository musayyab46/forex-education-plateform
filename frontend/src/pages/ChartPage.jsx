// import { useParams, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// export default function ChartPage() {
//   const {targetCurrency}=useParams();
//   const navigate = useNavigate();
//   const baseCurrency = "USD";
//   const [chartData, setChartData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const startDate = "2010-03-01";
//       const endDate = "2010-04-01";

//       const url = `https://api.exchangerate.host/timeframe?access_key=da3ac52901cff7eac442ef95b917a9f3&currencies=${baseCurrency},${targetCurrency}&start_date=${startDate}&end_date=${endDate}`;

//       try {
//         const response = await fetch(url);
//         const result = await response.json();

//         if (!result || !result.rates) {
//           setError("Exchange rate data is unavailable.");
//           return;
//         }

//         const pairKey = `${baseCurrency}${targetCurrency}`;
//         const quotes = result.rates;

//         const dates = Object.keys(quotes).sort(); // sort dates chronologically
//         const values = dates.map(date => {
//           const dayData = quotes[date];
//           return dayData ? dayData[pairKey] : undefined;
//         });

//         if (!values.length || values.includes(undefined)) {
//           setError("Some exchange rate data is missing or malformed.");
//           return;
//         }

//         setChartData({
//           labels: dates,
//           datasets: [
//             {
//               label: `${baseCurrency} to ${targetCurrency}`,
//               data: values,
//               fill: false,
//               borderColor: "blue",
//               tension: 0.1
//             }
//           ]
//         });
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Failed to load chart data.");
//       }
//     }

//     if (targetCurrency) {
//       fetchData();
//     } else {
//       setError("No currency selected.");
//     }
//   }, [targetCurrency]);

//   if (error) {
//     return (
//       <div style={{ padding: '20px' }}>
//         <h2>Error</h2>
//         <p>{error}</p>
//         <button onClick={() => navigate(-1)}>Back</button>
//       </div>
//     );
//   }

//   if (!chartData) {
//     return <p style={{ padding: '20px' }}>Loading chart...</p>;
//   }

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>{baseCurrency} to {targetCurrency} Chart</h2>
//       <Line data={chartData} />
//       <button onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>Back</button>
//     </div>
//   );
// }
import { useParams, useNavigate } from 'react-router-dom';
import CurrencyChart from '../components/CurrencyChart'; // adjust path if needed

export default function ChartPage() {
  const { baseCurrency,targetCurrency } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Currency Chart</h2>
      {targetCurrency ? (
        <CurrencyChart base={baseCurrency} target={targetCurrency} />
      ) : (
        <p>No currency selected.</p>
      )}
      <button onClick={() => navigate(-1)} style={{ marginTop: '10px' }}>Back</button>
    </div>
  );
}

