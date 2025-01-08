import { Fragment } from "react/jsx-runtime";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";
import useRevenueData from "../../../states/revenueData/hooks/useRevenueData";

/**
 * Component to display the revenue data analysis section
 */
export default function RevenueDataAnalysis() {
    const {
        isRevenueDataError,
        revenueData
    } = useRevenueData();

    // Show error state
    if (isRevenueDataError) {
        return <div>Error loading revenue data</div>;
    }

    return (
        <Fragment>
            <SubSectionLayout
                title="Users Data Overview"
                displayItems={ [
                    <SubSectionCard
                        key="total-revenue"
                        title="Total Revenue"
                        content= { revenueData?.totalRevenue.toLocaleString() || "N/A" }
                    />,
                    <SubSectionCard
                        key="compared-to-last-month"
                        title="Compared to Last Month"
                        content= { revenueData?.comparedToLastMonth || "N/A" }
                        isError={ revenueData?.comparedToLastMonth.includes("-") }
                        isPositive={ revenueData?.comparedToLastMonth.includes("+") }
                    />
                ] }
            />
        </Fragment>
    );
}
