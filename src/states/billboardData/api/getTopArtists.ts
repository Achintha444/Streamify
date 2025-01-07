import APIClient from "../../../service/api/apiClient";
import { Endpoints } from "../../../service/api/endpoints";
import { ArtistResponse } from "../models/Artist";

/**
 * Fetches the top artists from the API.
 *
 * @returns - A promise that resolves to the top artists.
 */
export const getTopArtists = async (): Promise<ArtistResponse> => {
    return APIClient.getInstance()
        .get<ArtistResponse>(Endpoints.topArtists)
        .then((response) => {
            return response as unknown as ArtistResponse;
        })
        .catch((error) => {
            throw error;
        });
};
