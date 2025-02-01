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
import { ChartData } from "./chartData";
import SubSectionLineChart from "../../../pages/app/components/subSectionLineChart";
import useUsersData from "../../../states/usersData/hooks/useUsersData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const UserAnalyticsChart: FunctionComponent = (): ReactElement => {
    const {
        isUserAnalyticsDataError,
        userAnalyticsData
    } = useUsersData();

    // Show error state
    if (isUserAnalyticsDataError) {
        return <div>Error loading users analytics data </div>;
    }

    const chartOptions: ChartOptions<"line"> = {
        plugins: {
            legend: {
                position: "top" as const
            }
        },
        responsive: true,
        scales: Object.fromEntries(
            Object.entries(userAnalyticsData!.scales).map(([ axisId, config ]) => [
                axisId,
                {
                    display: true,
                    grid: {
                        drawOnChartArea: false
                    },
                    position: axisId === "y" ? "left" : "right",
                    title: {
                        display: true,
                        text: config.title
                    },
                    type: "linear",

                    ...(axisId === "y1" && { max: 10, min: 0 }) // Optional scale limits
                }
            ])
        )
    };

    return (
        <SubSectionLineChart
            title="Users Data Analytics"
            subtitle="Analytics Overview"
            chartData={ userAnalyticsData as ChartData }
            chartOptions={ chartOptions }
        />
    );
};

export default UserAnalyticsChart;
