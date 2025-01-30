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
import { Line } from "react-chartjs-2";
import { ChartData } from "./chartData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
  chartData: ChartData;
  title?: string;
}

const UserAnalyticsChart = ({ chartData, title = "Analytics Overview" }: Props) => {
    const chartOptions: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: title
            },
            legend: {
                position: "top" as const
            }
        },
        scales: Object.fromEntries(
            Object.entries(chartData.scales).map(([ axisId, config ]) => [
                axisId,
                {
                    type: "linear",
                    display: true,
                    position: axisId === "y" ? "left" : "right",
                    title: {
                        display: true,
                        text: config.title
                    },
                    grid: {
                        drawOnChartArea: false
                    },
                    ...(axisId === "y1" && { min: 0, max: 10 }) // Optional scale limits
                }
            ])
        )
    };

    return <Line data={ chartData } options={ chartOptions } />;
};

export default UserAnalyticsChart;
