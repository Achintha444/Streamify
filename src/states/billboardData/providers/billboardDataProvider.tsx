import { FunctionComponent, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import { getTopArtists } from "../api/getTopArtists";
import { getTopSongs } from "../api/getTopSongs";
import BillboardDataContext from "../contexts/billboardDataContext";
import { Artist } from "../models/Artist";
import { Song } from "../models/Song";

/**
 * Props interface for the [BillboardDataProvider]
 */
export type BillboardDataProviderProps = PropsWithChildren;

/**
 * React context provider for the internal authentication data context.
 *
 * @param props - Props injected to the component.
 * @returns Internal authentication data context instance.
 */
const BillboardDataProvider: FunctionComponent<BillboardDataProviderProps> = (
    props: BillboardDataProviderProps
): ReactElement => {
    const { children } = props;

    const [ isTopArtistsLoading, setIsTopArtistsLoading ] = useState<boolean>(true);
    const [ topArtists, setTopArtists ] = useState<Artist[]>([]);
    const [ isTopArtistsError, setIsTopArtistsError ] = useState<boolean>(false);
    const [ rankingDate, setRankingDate ] = useState<string>("");
    const [ isTopSongsLoading, setIsTopSongsLoading ] = useState<boolean>(true);
    const [ topSongs, setTopSongs ] = useState<Song[]>([]);
    const [ isTopSongsError, setIsTopSongsError ] = useState<boolean>(false);
    const [ songsRankingDate, setSongsRankingDate ] = useState<string>("");

    useMemo(() => {
        const loadTopArtists = async () => {
            try {
                const response = await getTopArtists();

                setTopArtists(response.data);
                setRankingDate(response.date);
                setIsTopArtistsError(false);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setIsTopArtistsError(true);
            } finally {
                setIsTopArtistsLoading(false);
            }
        };

        loadTopArtists();
    }, [ getTopArtists ]);

    useMemo(() => {
        const loadTopSongs = async () => {
            try {
                const response = await getTopSongs();

                setTopSongs(response.data);
                setSongsRankingDate(response.date);
                setIsTopSongsError(false);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setIsTopSongsError(true);
            } finally {
                setIsTopSongsLoading(false);
            }
        };

        loadTopSongs();
    }, [ getTopSongs ]);

    return (
        <BillboardDataContext.Provider
            value={ {
                isTopArtistsError: isTopArtistsError,
                isTopArtistsLoading: isTopArtistsLoading,
                isTopSongsError: isTopSongsError,
                isTopSongsLoading: isTopSongsLoading,
                rankingDate: rankingDate,
                songsRankingDate: songsRankingDate,
                topArtists: topArtists,
                topSongs: topSongs
            } }
        >
            { children }
        </BillboardDataContext.Provider>
    );
};

export default BillboardDataProvider;
