import {
    CategoryScale,
    Chart as ChartJS,
    ChartOptions,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import { FunctionComponent, ReactElement } from "react";
import { Line } from "react-chartjs-2";
import { SubSection } from "./subSection";
import { ChartData } from "../../../states/usersData/models/chartData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * Sub section line chart for displaying a line chart in a sub section props.
 */
interface SubSectionLineChartProps {
    /**
     * Title of the sub section
     */
    title: string;
    /**
     * Subtitle of the sub section
     */
    subtitle?: string | undefined;
    /**
     * Chart data to display
     */
    chartData: ChartData;
    /**
     * Chart options
     */
    chartOptions?: ChartOptions<"line">;
}

export const SubSectionLineChart: FunctionComponent<SubSectionLineChartProps> = (
    props: SubSectionLineChartProps): ReactElement => {

    const {
        title,
        subtitle,
        chartData,
        chartOptions
    } = props;

    return (
        <SubSection
            title={ title }
            subtitle={ subtitle }
            content={
                <Line data={ chartData } options={ chartOptions } />
            }
        />
    );
};

export default SubSectionLineChart;
