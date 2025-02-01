import {
    ChartOptions
} from "chart.js";
import { FunctionComponent, ReactElement } from "react";
import SubSectionLineChart from "../../../pages/app/components/subSectionLineChart";
import useUsersData from "../../../states/usersData/hooks/useUsersData";
import { ChartData } from "../../../states/usersData/models/chartData";

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
