import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { chartStyle, chartContainerStyle } from "./styles";

Chart.register(...registerables);

const getChartColors = (data) => {
  if (data.length < 2) return { borderColor: '#0000ff', backgroundColor: "rgba(0, 0, 255, 0.2)" };

  const lastValue = data[data.length - 1].value;
  const prevValue = data[data.length - 2].value;

  if (lastValue > prevValue) return { borderColor: '#ff0000', backgroundColor: "rgba(255,0,0, 0.2)" };
  if (lastValue < prevValue) return { borderColor: '#00ff00', backgroundColor: "rgba(0,255,0, 0.2)" };

  return { borderColor: '#0000ff', backgroundColor: "rgba(0, 0, 255, 0.2)" };
};

const getPointColors = (data) => {
  return data.map((item, index) => {
    if (index === 0) return "#0000ff";
    const prevValue = data[index - 1].value;
    return item.value > prevValue ? "#00ff00" : item.value < prevValue ? "#ff0000" : "#0000ff";
  });
};

const CurrencyChart = ({ data = [] }) => {
  const usBrColors = getChartColors(data);
  
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "USD-BRL",
        data: data.map((item) => item.value),
        fill: true,
        borderColor: usBrColors.borderColor,
        backgroundColor: usBrColors.backgroundColor,
        tension: 0.2,
        pointBackgroundColor: getPointColors(data),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        reverse: true,
        title: { display: true, text: "Data", color: "white" },
        ticks: { color: "white" },
        grid: { color: "white" },
      },
      y: {
        title: { display: true, text: "Preço (BRL)", color: "white" },
        ticks: { color: "white" },
        grid: { color: "rgba(253, 253, 253, 0.2)" },
      },
    },
    elements: {
      line: { borderColor: "rgba(255, 38, 0, 1)" },
      point: { borderColor: "rgba(255, 38, 0, 1)", backgroundColor: "rgba(255, 38, 0, 1)" },
    },
  };



  
  return (
    <div style={chartContainerStyle}>
      <div style={chartStyle}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CurrencyChart;
