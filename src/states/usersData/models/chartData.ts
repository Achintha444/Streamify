/**
 * ChartData model
 */
export interface ChartData {
  /**
   * Labels for the chart.
   */
  labels: string[];
  /**
   * Datasets for the chart.
   */
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    tension?: number;
    yAxisID: string;
    axisLabel: string; // New field for axis title
  }[];
  /**
   * Scales for the chart.
   */
  scales: {
    [axisId: string]: {
      title: string;
    };
  };
}
