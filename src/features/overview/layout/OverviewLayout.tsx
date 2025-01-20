import Stack from "@mui/material/Stack";
import UsersDataAnalyst from "../components/DataAnalysis";
import RevenueDataAnalysis from "../components/revenueDataAnalysis";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";

export default function OverviewLayout() {

    return (
        <Stack spacing={ 4 }>
            <UsersDataAnalyst />
            <TopArtists />
            <TopSongs />
            <RevenueDataAnalysis />
        </Stack>
    );
}
