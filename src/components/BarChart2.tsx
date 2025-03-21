import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

Chart.register(...registerables);

interface ChartData {
  prefectureJobCounts: { [key: string]: number };
}

const BarChart2 = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart-data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: ChartData = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const labels = Object.keys(chartData.prefectureJobCounts);
  const data = Object.values(chartData.prefectureJobCounts);

  const backgroundColors = labels.map((label) => {
    if (label === '大阪府' || label === '東京都' || label === '京都府' || label === '高知県') {
      return 'rgba(255, 99, 132, 0.5)';
    } else {
      return 'rgba(54, 162, 235, 0.5)';
    }
  });

  const borderColors = labels.map((label) => {
    if (label === '大阪府' || label === '東京都' || label === '京都府' || label === '高知県') {
      return 'rgba(255, 99, 132, 1)';
    } else {
      return 'rgba(54, 162, 235, 1)';
    }
  });

  const processedData = {
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

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={processedData} options={options} />;
};

export default BarChart2;