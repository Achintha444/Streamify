import BillboardDataProvider from "../../../states/billboardData/providers/billboardDataProvider";
import RevenueDataProvider from "../../../states/revenueData/providers/revenueDataProvider";
import UsersDataProvider from "../../../states/usersData/providers/usersDataProvider";
import OverviewLayout from "../layout/OverviewLayout";

export default function OverviewPage() {
    return (
        <BillboardDataProvider>
            <UsersDataProvider>
                <RevenueDataProvider>
                    <OverviewLayout />
                </RevenueDataProvider>
            </UsersDataProvider>
        </BillboardDataProvider>
    );
}
