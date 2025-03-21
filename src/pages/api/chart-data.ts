import type { NextApiRequest, NextApiResponse } from 'next';

interface ChartData {
  prefectureJobCounts: { [key: string]: number };
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChartData>
) {
  const data: ChartData = {
    prefectureJobCounts: {
      "北海道": 150,
      "青森県": 80,
      "岩手県": 90,
      "宮城県": 120,
      "秋田県": 70,
      "山形県": 85,
      "福島県": 100,
      "茨城県": 110,
      "栃木県": 105,
      "群馬県": 95,
      "埼玉県": 130,
      "千葉県": 125,
      "東京都": 200,
      "神奈川県": 140,
      "新潟県": 90,
      "富山県": 85,
      "石川県": 95,
      "福井県": 80,
      "山梨県": 75,
      "長野県": 100,
      "岐阜県": 105,
      "静岡県": 115,
      "愛知県": 150,
      "三重県": 110,
      "滋賀県": 95,
      "京都府": 120,
      "大阪府": 160,
      "兵庫県": 135,
      "奈良県": 85,
      "和歌山県": 70,
      "鳥取県": 65,
      "島根県": 70,
      "岡山県": 110,
      "広島県": 125,
      "山口県": 90,
      "徳島県": 75,
      "香川県": 80,
      "愛媛県": 85,
      "高知県": 70,
      "福岡県": 140,
      "佐賀県": 75,
      "長崎県": 80,
      "熊本県": 95,
      "大分県": 85,
      "宮崎県": 75,
      "鹿児島県": 80,
      "沖縄県": 90,
    },
  };
  res.status(200).json(data);
}