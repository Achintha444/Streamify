import { CircularProgress } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { SubSectionCard } from "../../../pages/app/components/SubSectionCard";
import { SubSectionLayout } from "../../../pages/app/components/SubSectionLayout";
import { SubSectionListCard } from "../../../pages/app/components/SubSectionListCard";
import useBillboardData from "../../../states/billboardData/hooks/useBillboardData";
import { Song } from "../../../states/billboardData/models/Song";

/**
 * Component to display the top songs section
 */
export default function TopSongs() {
    const {
        isTopSongsLoading,
        isTopSongsError,
        topSongs,
        songsRankingDate
    } = useBillboardData();

    // Show loading state
    if (isTopSongsLoading) {
        return <CircularProgress />;
    }

    // Show error state
    if (isTopSongsError) {
        return <div>Error loading top songs data</div>;
    }

    // Ensure we have enough artists before rendering
    const hasEnoughSongs = topSongs?.length >= 5;

    if (!hasEnoughSongs) {
        return <div>Insufficient songs data</div>;
    }

    return (
        <Fragment>
            <SubSectionLayout
                title="Top Songs"
                subtitle={ songsRankingDate && `Top songs as of ${songsRankingDate}` }
                displayItems={ [
                    <SubSectionCard
                        key="top-songs"
                        title="Billboard Top Songs"
                        content={ topSongs[0]?.name || "N/A" }
                        imageUrl={ topSongs[0]?.image || "" }
                        caption={ topSongs[0]?.artist || "N/A" }
                    />,
                    <SubSectionListCard
                        key="songs-list"
                        contentList={
                            topSongs
                                .slice(1, 5)
                                .map((song: Song, index: number) => ({
                                    imageUrl: song?.image || "",
                                    number: `${index + 2}`,
                                    subtitle: song?.artist || "N/A",
                                    title: song?.name || "N/A"
                                }))
                        }
                    />
                ] }
            />
        </Fragment>
    );
}
