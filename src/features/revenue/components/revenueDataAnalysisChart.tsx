import {
    ChartOptions
} from "chart.js";
import { FunctionComponent, ReactElement } from "react";
import SubSectionLineChart from "../../../pages/app/components/subSectionLineChart";
import useRevenueData from "../../../states/revenueData/hooks/useRevenueData";
import { ChartData } from "../../../states/usersData/models/chartData";

export const RevenueAnalyticsChart: FunctionComponent = (): ReactElement => {
    const {
        isRevenueAnalyticsDataError,
        revenueAnalyticsData
    } = useRevenueData();

    // Show error state
    if (isRevenueAnalyticsDataError) {
        return <div>Error loading Revenues analytics data </div>;
    }

    const chartOptions: ChartOptions<"line"> = {
        plugins: {
            legend: {
                position: "top" as const
            }
        },
        responsive: true,
        scales: Object.fromEntries(
            Object.entries(revenueAnalyticsData!.scales).map(([ axisId, config ]) => [
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
            title="Revenues Data Analytics"
            chartData={ revenueAnalyticsData as ChartData }
            chartOptions={ chartOptions }
        />
    );
};

export default RevenueAnalyticsChart;
