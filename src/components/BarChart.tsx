import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { ChartData } from '../utils/types';

Chart.register(...registerables);

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/chart-data-2');
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
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  };

  if (!chartData) {
    return <div>Loading...</div>;
  }

  // processedDataを修正
  const processedData = {
    labels: chartData.labels,
    datasets: [
      {
        label: chartData.datasets[0].label, // ラベルをchartDataから取得
        data: chartData.datasets[0].data,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={processedData} options={options} />;
};

export default BarChart;