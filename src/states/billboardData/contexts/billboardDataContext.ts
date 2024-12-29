import { Context, createContext } from "react";
import { Artist } from "../models/Artist";
import { Song } from "../models/Song";

/**
 * Props interface for BillboardDataContext.
 */
export interface BillboardDataContextProps {
    /**
     * Top artists.
     */
    topArtists: Artist[];
    /**
     * Indicates if the top artists are loading.
     */
    isTopArtistsLoading: boolean;
    /**
     * Indicates if there was an error retrieving the top artists.
     */
    isTopArtistsError: boolean;
    /**
     * Artists ranking date.
     */
    rankingDate: string;
    /**
     * Tops songs.
     */
    topSongs: Song[];
    /**
     * Indicates if the top songs are loading.
     */
    isTopSongsLoading: boolean;
    /**
     * Indicates if there was an error retrieving the top songs.
     */
    isTopSongsError: boolean;
    /**
     * Songs ranking date.
     */
    songsRankingDate: string;
}

/**
 * Context object for managing the BillboardDataContext.
 */
const BillboardDataContext: Context<null | BillboardDataContextProps> = createContext<
    null | BillboardDataContextProps
>(
    null
);

/**
 * Display name for the BillboardDataContext.
 */
BillboardDataContext.displayName = "BillboardDataContext";

export default BillboardDataContext;
