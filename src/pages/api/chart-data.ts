import type { NextApiRequest, NextApiResponse } from 'next';

interface ChartData {
  chartLabels2: string[];
  chartData2: number[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChartData>
) {
  const data: ChartData = {
    chartLabels2: ['1日', '2日', '3日', '4日', '5日'], // 例
    chartData2: [10, 15, 7, 20, 12], // 例
  };
  res.status(200).json(data);
}