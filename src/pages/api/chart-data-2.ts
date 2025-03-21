// pages/api/chart-data-2.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChartData } from '../../utils/types'; // パスを修正

const generateTestData = (length: number, startValue: number, volatility: number, trend: number, seasonalAmplitude: number, eventImpact: number) => {
    const data = [startValue];
    for (let i = 1; i < length; i++) {
      let change = Math.random() * volatility - volatility / 2 + trend;
  
      // 季節変動
      change += seasonalAmplitude * Math.sin((2 * Math.PI * i) / 30); // 30日周期
  
      // イベントの影響
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChartData>
) {
  // テストデータの生成
  const chartData = generateTestData(60, 100, 2, 0.1, 1, 5);
  const chartLabels = generateTestLabels(60, new Date(2024, 2, 1));

  const data: ChartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'エントリー数',
        data: chartData,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  res.status(200).json(data);
}
