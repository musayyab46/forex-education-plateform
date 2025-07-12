import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function CurrencyChart({ base = "USD", target = "INR" }) {
  const [chartData, setChartData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRates() {
      try {
        // last 7 days range
        const end = new Date();
end.setDate(end.getDate() - 30); // yesterday
const start = new Date();
start.setDate(end.getDate() - 60); // 7-day range ending yesterday



        const format = (d) => d.toISOString().split('T')[0];
        const startDate = format(start);
        const endDate = format(end);
        if (base === target) {
  setError("Base and target currencies must be different.");
  return;
}

        const url = `https://api.frankfurter.app/${startDate}..${endDate}?from=${base}&to=${target}`;
        const res = await fetch(url);
        const data = await res.json();

        if (!data.rates) {
          setError("No rate data found");
          return;
        }

        const dates = Object.keys(data.rates).sort();
        const values = dates.map(date => data.rates[date][target]);

        setChartData({
          labels: dates,
          datasets: [{
            label: `${base} to ${target} (Last 7 Days)`,
            data: values,
            borderColor: "blue",
            fill: false,
            tension: 0.3,
          }],
        });
      } catch (err) {
  console.error("Fetch error:", err); // this will show exact error
  setError("Failed to load exchange rate data.");
}

    }

    fetchRates();
  }, [base, target]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{base} to {target} Exchange Rate</h2>
      <Line data={chartData} />
    </div>
  );
}
