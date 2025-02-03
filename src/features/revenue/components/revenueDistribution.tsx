import { Stack } from "@mui/material";
import { SubSection } from "../../../pages/app/components/subSection";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionListCard } from "../../../pages/app/components/SubSectionListCard";
import useRevenueData from "../../../states/revenueData/hooks/useRevenueData";
import { RevenueSource } from "../../../states/revenueData/models/revenueSource";

/**
 * Component to display the revenue data distribution.
 */
export default function RevenueDistribution() {
    const {
        isRevenueDistributionDataError,
        revenueDistributionData
    } = useRevenueData();

    // Show error state
    if (isRevenueDistributionDataError) {
        return <div>Error loading revenue distribution data</div>;
    }

    return (
        <SubSection
            title="Revenue Distribution"
            content={ (
                <Stack spacing={ 1 }>
                    <SubSectionCard
                        title="Total Revenue"
                        content={ revenueDistributionData?.totalRevenue.toLocaleString() || "N/A" }
                    />
                    <SubSectionListCard
                        key="distribution-list"
                        contentList={
                            revenueDistributionData?.sources.map((source: RevenueSource, index: number) => ({
                                number: `${index + 1}`,
                                subtitle: `${source.amount} - ${source.percentage}%`,
                                title: source.source
                            })) || []
                        }
                    />
                </Stack>
            ) }
        />
    );
}
