import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { ChartData } from '../utils/types'; // パスを修正

Chart.register(...registerables);

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart-data-2'); // APIエンドポイント
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


  return <Line data={chartData} options={options} />;
};

export default BarChart;