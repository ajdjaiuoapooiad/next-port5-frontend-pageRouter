export interface Post {
    id: string;
    company: string;
    place: string;
    status: string;
}

export interface Job {
    id: string;
    title: string;
    company: string;
    place: string;
}

// types/interfaces.ts
export interface ChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      tension?: number;
    }[];
  }
  
  export interface Chart3Data {
      chartLabels3: string[];
      chartData3: number[];
  }