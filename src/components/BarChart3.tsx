import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// ... (generateTestDataとgenerateTestLabelsのコード)

const BarChart3 = () => {
  const chartData = generateTestData(60, 100, 2, 0.1, 1, 5);
  const chartLabels = generateTestLabels(60, new Date(2024, 2, 1));

  const chartDataObj = {
    labels: chartLabels,
    datasets: [
      {
        label: '求人数',
        data: chartData,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.4,
      },
    ],
  };

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

  return <Line data={chartDataObj} options={options} />;
};

export default BarChart3;


const generateTestData = (length: number, startValue: number, volatility: number, trend: number, seasonalAmplitude: number, eventImpact: number) => {
    const data = [startValue];
    for (let i = 1; i < length; i++) {
      let change = Math.random() * volatility - volatility / 2 + trend;
  
      // 季節変動
      change += seasonalAmplitude * Math.sin((2 * Math.PI * i) / 30); // 30日周期の季節変動
  
      // イベントの影響（例：15日目に大きな影響）
      if (i === 15) {
        change += eventImpact;
      }
  
      data.push(data[i - 1] + change);
    }
    return data;
  };
  
  const generateTestLabels = (length: number, startDate: Date) => {
    const labels = [];
    let currentDate = new Date(startDate);
    for (let i = 0; i < length; i++) {
      labels.push(`${currentDate.getMonth() + 1}/${currentDate.getDate()}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return labels;
  };
  
  // テストデータの生成
  const chartData = generateTestData(60, 100, 2, 0.1, 1, 5); // 60日分のデータ、開始値100、変動幅2、トレンド0.1、季節変動1、イベント影響5
  const chartLabels = generateTestLabels(60, new Date(2024, 2, 1)); // 2024年3月1日から60日分のラベル
  
  console.log(chartData);
  console.log(chartLabels);