import BillboardDataProvider from "../../../states/billboardData/providers/billboardDataProvider";
import UsersDataProvider from "../../../states/usersData/providers/usersDataProvider";
import OverviewLayout from "../layout/OverviewLayout";

// TODO: Create a local-data service to fetch the data
export default function OverviewPage() {
    return (
        <BillboardDataProvider>
            <UsersDataProvider>
                <OverviewLayout />
            </UsersDataProvider>
        </BillboardDataProvider>
    );
}
