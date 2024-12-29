/**
 * Represents the structure of the API response.
 */
export interface SongResponse {
    /**
     * The date of the data in the format "YYYY-DD-MM".
     */
    date: string;

    /**
     * An array of chart data entries.
     */
    data: Song[];
}

/**
 * Represents a single entry in the chart data.
 */
export interface Song {
    /**
     * The name of the Song
     */
    name: string;

    /**
     * The name of the artist associated with the Song.
     */
    artist: string;

    /**
     * The URL of the image associated with the Song.
     */
    image: string;

    /**
     * The current rank of the Song on the chart.
     */
    rank: number;

    /**
     * The rank of the Song in the previous week, or null if unavailable.
     */
    last_week_rank: number | null;

    /**
     * The highest rank the Song has achieved on the chart.
     */
    peak_rank: number;

    /**
     * The total number of weeks the Song has been on the chart.
     */
    weeks_on_chart: number;
}
