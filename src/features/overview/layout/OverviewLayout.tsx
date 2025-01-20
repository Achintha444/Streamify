import Stack from "@mui/material/Stack";
import RevenueDataAnalysis from "../components/revenueDataAnalysis";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";
import UsersDataAnalyst from "../components/UsersDataAnalysis";

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
