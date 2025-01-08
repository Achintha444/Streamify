import Stack from "@mui/material/Stack";
import TopArtists from "../components/TopArtists";
import TopSongs from "../components/TopSongs";

export default function OverviewLayout() {

    return (
        <Stack>
            <TopArtists />
            <TopSongs />
        </Stack>
    );
}
