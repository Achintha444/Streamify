import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionGrid } from "../../../pages/app/components/subSectionGrid";
import { SubSectionListCard } from "../../../pages/app/components/SubSectionListCard";
import useBillboardData from "../../../states/billboardData/hooks/useBillboardData";
import { Artist } from "../../../states/billboardData/models/Artist";

export default function TopArtistsList() {
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
        <SubSectionGrid
            title="Top 20 Artists"
            subtitle={ rankingDate && `Top artists as of ${rankingDate}` }
            displayItems={ [
                <SubSectionCard
                    key="top-artist"
                    title="Billboard Top Artist"
                    content= { topArtists[0]?.name || "N/A" }
                    imageUrl={ topArtists[0]?.image || "" }
                />,
                <SubSectionListCard
                    key="artist-list"
                    contentList={
                        topArtists
                            .slice(1, 10)
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
                            .slice(11, 23)
                            .map((artist: Artist, index: number) => ({
                                imageUrl: artist?.image || "",
                                number: `${index + 11}`,
                                title: artist?.name || "N/A"
                            }))
                    }
                />
            ] }
        />
    );
}
