import APIClient from "../../../service/api/apiClient";
import { Endpoints } from "../../../service/api/endpoints";
import { SongsResponse } from "../models/Song";

/**
 * Fetches the top songs from the API.
 *
 * @returns - A promise that resolves to the top songs.
 */
export const getTopSongs = async (): Promise<SongsResponse> => {
    return APIClient.getInstance()
        .get<SongsResponse>(Endpoints.topSongs)
        .then((response) => {
            return response as unknown as SongsResponse;
        })
        .catch((error) => {
            throw error;
        });
};
