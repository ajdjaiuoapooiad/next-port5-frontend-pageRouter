import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart2 = ({ data, labels }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'データ',
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Y軸の開始を0にする
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart2;