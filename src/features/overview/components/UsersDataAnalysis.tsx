import { Fragment } from "react/jsx-runtime";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";
import useUsersData from "../../../states/usersData/hooks/useUsersData";

/**
 * Component to display the top artists section
 */
export default function UsersDataAnalyst() {
    const {
        isUsersDataError,
        usersData
    } = useUsersData();

    // Show error state
    if (isUsersDataError ) {
        return <div>Error loading users data</div>;
    }

    return (
        <Fragment>
            <SubSectionLayout
                title="Users Data Overview"
                displayItems={ [
                    <SubSectionCard
                        key="total-users"
                        title="Total Users"
                        content= { usersData?.totalUsers.toLocaleString() || "N/A" }
                    />,
                    <SubSectionCard
                        key="active-users"
                        title="Active Users"
                        content= { usersData?.activeUsers.toLocaleString() || "N/A" }
                    />,
                    <SubSectionCard
                        key="unsubscribed-users"
                        title="Unsubscribed Users"
                        content= { `- ${usersData?.unsubscribedUsers.toLocaleString()}` || "N/A" }
                        isError={ true }
                    />
                ] }
            />
        </Fragment>
    );
}
