import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart = () => {
  const chartData2 = [100, 100, 104, 110, 114];
  const chartLabels2 = ['3/1', '3/2', '3/3', '3/4', '3/5'];

  const chartData = {
    labels: chartLabels2,
    datasets: [
      {
        label: '株価',
        data: chartData2,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false, // Y軸の開始を0にしない
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BarChart;