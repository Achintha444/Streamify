export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension?: number;
    yAxisID: string;
    axisLabel: string; // New field for axis title
  }[];
  scales: {
    [axisId: string]: {
      title: string;
    };
  };
}
