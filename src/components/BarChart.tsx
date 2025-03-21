import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import data from '../utils/data.json'; // ファイルパスを適切に設定




const BarChart = () => {
  const chartData = {
    labels: data.chartLabels2,
    datasets: [
      {
        label: 'エントリー数',
        data: data.chartData2,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  console.log(chartData);
  


  const options = {
    scales: {
      y: {
        beginAtZero: false, // Y軸の開始を0にしない
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BarChart;


