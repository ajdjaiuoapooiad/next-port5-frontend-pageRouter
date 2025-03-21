import { Bar } from 'react-chartjs-2'; // Barコンポーネントをインポート
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { Chart3Data } from '../utils/types';

Chart.register(...registerables);

const BarChart3 = () => {
  const [chartData, setChartData] = useState<Chart3Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart-data-3');
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
        beginAtZero: true, // y軸の最小値を0に設定
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
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // 棒グラフの色を設定
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={processedData} options={options} />; // Barコンポーネントを使用
};

export default BarChart3;