import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styles from './styles';

Chart.register(...registerables);

const getChartColors = (data) => {
  if (data.length < 2) return { borderColor: "#0000ff", backgroundColor: "rgba(0, 0, 255, 0.2)" };

  const lastValue = data[data.length - 1].value;
  const prevValue = data[data.length - 2].value;

  if (lastValue > prevValue) return { borderColor: "#00ff00", backgroundColor: "rgba(0, 255, 0, 0.2)" };
  if (lastValue < prevValue) return { borderColor: "#ff0000", backgroundColor: "rgba(255, 0, 0, 0.2)" };
  
  return { borderColor: "#0000ff", backgroundColor: "rgba(0, 0, 255, 0.2)" };
};

const getPointColors = (data) => {
  return data.map((item, index) => {
    if (index === 0) return "#0000ff";

    const prevValue = data[index - 1].value;
    if (item.value > prevValue) return "#00ff00";
    if (item.value < prevValue) return "#ff0000";

    return "#0000ff";
  });
};

const ChartComponent = ({ btcData, ethData }) => {
  const btcColors = getChartColors(btcData);
  const ethColors = getChartColors(ethData);

  const btcChartData = {
    labels: btcData.map((item) => item.date),
    datasets: [
      {
        label: "Bitcoin (BTC)",
        data: btcData.map((item) => item.value),
        fill: true,
        borderColor: btcColors.borderColor,
        backgroundColor: btcColors.backgroundColor,
        tension: 0.2,
        pointBackgroundColor: getPointColors(btcData),
      },
    ],
  };

  const ethChartData = {
    labels: ethData.map((item) => item.date),
    datasets: [
      {
        label: "Ethereum (ETH)",
        data: ethData.map((item) => item.value),
        fill: true,
        borderColor: ethColors.borderColor,
        backgroundColor: ethColors.backgroundColor,
        tension: 0.2,
        pointBackgroundColor: getPointColors(ethData),
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
        title: { display: true, text: "Data", color: "#ffffff" },
        ticks: { color: "#ffffff" },
        grid: { color: "rgba(255, 255, 255, 0.5)" },
      },
      y: {
        title: { display: true, text: "Preço (USD)", color: "#ffffff" },
        ticks: { color: "#ffffff" },
        grid: { color: "rgba(255, 255, 255, 0.5)" },
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chart}>
        <h3>BTC</h3>
        <Line data={btcChartData} options={options} />
      </div>
      <div style={styles.chart}>
        <h3>ETH</h3>
        <Line data={ethChartData} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
