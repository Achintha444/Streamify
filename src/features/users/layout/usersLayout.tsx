import Stack from "@mui/material/Stack";
import UsersDataAnalyst from "../components/usersDataAnalysis";
import UserAnalyticsChart from "../components/line_chart";
import { ChartData } from "../components/chartData";
import userAnalyticsData from '../components/x.json';

const analyticsData = userAnalyticsData as ChartData;

export default function UsersLayout() {
    return (
        <Stack spacing={ 4 }>
            <UsersDataAnalyst />
            <UserAnalyticsChart chartData={analyticsData} />
        </Stack>
    );
}
