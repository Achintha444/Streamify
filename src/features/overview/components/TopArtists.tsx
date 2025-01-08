import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";
import { SubSectionListCard } from "../../../pages/app/components/SubSectionListCard";
import useBillboardData from "../../../states/billboardData/hooks/useBillboardData";
import { Artist } from "../../../states/billboardData/models/Artist";

/**
 * Component to display the top artists section
 */
export default function TopArtists() {
    const {
        isTopArtistsError,
        isTopArtistsLoading,
        rankingDate,
        topArtists
    } = useBillboardData();

    // Show loading state
    if (isTopArtistsLoading) {
        return <CircularProgress />;
    }

    // Show error state
    if (isTopArtistsError ) {
        return <div>Error loading top artists data</div>;
    }

    // Ensure we have enough artists before rendering
    const hasEnoughArtists = topArtists?.length >= 5;

    if (!hasEnoughArtists) {
        return <div>Insufficient artist data</div>;
    }

    return (
        <SubSectionLayout
            title="Top Artists"
            subtitle={ rankingDate && `Top artists as of ${rankingDate}` }
            displayItems={ [
                <SubSectionCard
                    key="top-artist"
                    title="Billboard Top Artist"
                    content= { topArtists[0]?.name || "N/A" }
                    imageUrl={ topArtists[0]?.image || "" }
                />,
                <Stack direction="row" spacing={ 2 }>
                    <SubSectionListCard
                        key="artist-list"
                        contentList={
                            topArtists
                                .slice(1, 5)
                                .map((artist: Artist, index: number) => ({
                                    imageUrl: artist?.image || "",
                                    number: `${index + 2}`,
                                    title: artist?.name || "N/A"
                                }))
                        }
                    />,
                    <SubSectionListCard
                        key="artist-list"
                        contentList={
                            topArtists
                                .slice(6, 10)
                                .map((artist: Artist, index: number) => ({
                                    imageUrl: artist?.image || "",
                                    number: `${index + 6}`,
                                    title: artist?.name || "N/A"
                                }))
                        }
                    />
                </Stack>
            ] }
        />
    );
}
