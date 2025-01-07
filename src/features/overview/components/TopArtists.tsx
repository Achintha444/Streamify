import { CircularProgress } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";
import { SubSectionListCard } from "../../../pages/app/components/SubSectionListCard";
import useBillboardData from "../../../states/billboardData/hooks/useBillboardData";

export default function TopArtists() {
    const {
        isTopArtistsError,
        isTopArtistsLoading,
        isTopSongsLoading,
        rankingDate,
        topArtists
    } = useBillboardData();

    // Show loading state
    if (isTopArtistsLoading || isTopSongsLoading) {
        return <CircularProgress />;
    }

    // Show error state
    if (isTopArtistsError ) {
        return <div>Error loading top artists data</div>;
    }

    // Ensure we have enough artists before rendering
    const hasEnoughArtists = topArtists?.length >= 4;

    if (!hasEnoughArtists) {
        return <div>Insufficient artist data</div>;
    }

    return (
        <Fragment>
            <SubSectionLayout
                title="Top Artists"
                subtitle={ rankingDate && `Top artists as of ${rankingDate}` }
                displayItems={ [
                    <SubSectionCard
                        key="top-artist"
                        title="Billboard Top Artist"
                        content={ topArtists[0]?.name || "N/A" }
                        imageUrl={ topArtists[0]?.image || "" }
                    />,
                    <SubSectionListCard
                        key="artist-list"
                        contentList={
                            topArtists
                                .slice(1, 5)
                                .map((artist, index) => ({
                                    imageUrl: artist?.image || "",
                                    number: `${index + 2}`,  // Adding 2 because we start from the second artist
                                    title: artist?.name || "N/A"
                                }))
                        }
                    />
                ] }
            />
        </Fragment>
    );
}
