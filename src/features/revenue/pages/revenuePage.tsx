import RevenueDataProvider from "../../../states/revenueData/providers/revenueDataProvider";
import RevenueLayout from "../layout/revenueLayout";

export default function RevenuePage() {
    return (
        <RevenueDataProvider>
            <RevenueLayout />
        </RevenueDataProvider>
    );
}
