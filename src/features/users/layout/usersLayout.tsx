import Stack from "@mui/material/Stack";
import UsersDataAnalyst from "../components/usersDataAnalysis";
import UserAnalyticsChart from "../components/usersDataAnalyticsChart";

export default function UsersLayout() {
    return (
        <Stack spacing={ 4 }>
            <UsersDataAnalyst />
            <UserAnalyticsChart />
        </Stack>
    );
}
