import { ChartData } from "./chartData";

/**
 * User Analytics Data Model
 */
export interface UserAnalyticsData extends ChartData {
    /**
     * Labels for the chart.
     */
    labels: string[];
    datasets: UserAnalyticsDataSet[];
    scales: {
        [axisId: string]: ChartScale;
    };
}

/**
 * Represents the data of users.
 */
interface UserAnalyticsDataSet {
    /**
     * Labels for the chart.
     */
    label: string;
    /**
     * Data for the chart.
     */
    data: number[];
    /**
     * Border color for the chart.
     */
    borderColor: string;
    /**
     * Tension for the chart.
     */
    tension?: number;
    /**
     * Y axis ID for the chart.
     */
    yAxisID: string;
    /**
     * Axis label for the chart.
     */
    axisLabel: string; // New field for axis title
}

/**
 * Scale of the chart.
 */
interface ChartScale {
    /**
     * Title of the scale.
     */
    title: string;
}
