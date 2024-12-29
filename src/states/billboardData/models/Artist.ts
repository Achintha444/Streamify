/**
 * Represents the structure of the API response.
 */
export interface ArtistResponse {
    /**
     * The date of the data in the format "YYYY-DD-MM".
     */
    date: string;

    /**
     * An array of Artist entries.
     */
    data: Artist[];
}

/**
 * Represents a single entry in the Artist.
 */
export interface Artist {
    /**
     * The name of the Artist.
     */
    name: string;

    /**
     * The URL of the image associated with the Artist.
     */
    image: string;

    /**
     * The current rank of the Artist on the chart.
     */
    rank: number;

    /**
     * The rank of the Artist in the previous week, or null if unavailable.
     */
    last_week_rank: number | null;

    /**
     * The highest rank the Artist has achieved on the chart.
     */
    peak_rank: number;

    /**
     * The total number of weeks the Artist has been on the chart.
     */
    weeks_on_chart: number;
}
