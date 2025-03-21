import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';

Chart.register(...registerables);

interface ChartData {
  chartLabels2: string[];
  chartData2: number[];
}

const BarChart: React.FC = () => {
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
    labels: chartData.chartLabels2,
    datasets: [
      {
        label: 'エントリー数',
        data: chartData.chartData2,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={processedData} options={options} />;
};

export default BarChart;