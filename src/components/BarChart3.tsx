import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { Chart3Data } from '../utils/types'; // パスを修正

Chart.register(...registerables);

const BarChart3 = () => {
  const [chartData, setChartData] = useState<Chart3Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart-data-3'); // APIエンドポイント
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data: Chart3Data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: false,
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

    const processedData = {
        labels: chartData.chartLabels3,
        datasets: [
          {
            label: '求人数',
            data: chartData.chartData3,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.4,
          },
        ],
      };

  return <Line data={processedData} options={options} />;
};

export default BarChart3;

