import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface BarChart2Props {
  data: number[];
  labels: string[];
}

const BarChart2: React.FC<BarChart2Props> = ({ data, labels }) => {
  const backgroundColors = labels.map((label) => {
    if (label === '大阪府' || label === '東京都'|| label === '京都府'|| label === '高知県' ) {
      return 'rgba(255, 99, 132, 0.5)'; // 赤
    } else {
      return 'rgba(54, 162, 235, 0.5)'; // 他の都道府県は青
    }
  });

  const borderColors = labels.map((label) => {
    if (label === '大阪府' || label === '東京都' || label === '京都府'|| label === '高知県' ) {
      return 'rgba(255, 99, 132, 1)'; // 赤
    } else {
      return 'rgba(54, 162, 235, 1)'; // 他の都道府県は青
    }
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'データ',
        data: data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };
  console.log(chartData);
  

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart2;