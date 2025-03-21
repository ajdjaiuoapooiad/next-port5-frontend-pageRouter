import type { NextApiRequest, NextApiResponse } from 'next';
import { ChartData } from '../../utils/types';

const generateTestData = (
  length: number,
  startValue: number,
  volatility: number,
  trend: number,
  seasonalAmplitude: number,
  eventImpact: number
) => {
  const data = [startValue];
  for (let i = 1; i < length; i++) {
    let change = Math.random() * volatility - volatility / 2 + trend;

    change += seasonalAmplitude * Math.sin((2 * Math.PI * i) / 365);

    if (i >= 15 && i < 22) {
      change += eventImpact * Math.exp(-((i - 18) ** 2) / 8);
    }

    const newValue = Math.round(Math.max(0, data[i - 1] + change));
    data.push(newValue);
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
  const chartData = generateTestData(60, 100, 5, 0.5, 2, 10);
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