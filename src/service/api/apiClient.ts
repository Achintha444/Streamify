import axios from "axios";
import { APIConfig } from "./apiConfig";

/**
 * API client. Used to make HTTP requests.
 * Created as a singleton.
 */
export default class APIClient {

    private static instance: APIClient;

    private constructor() {
        axios.defaults.baseURL = APIConfig.baseURL;
        axios.defaults.headers.post["Content-Type"] = APIConfig.contentType;
        axios.defaults.timeout = APIConfig.timeout;
    }

    /**
     * Get the instance of the APIClient
     * @returns [APIClient] The instance of the APIClient
     */
    public static getInstance(): APIClient {
        if (!APIClient.instance) {
            APIClient.instance = new APIClient();
        }

        return APIClient.instance;
    }

    /**
     * The GET request method
     *
     * @param url - The URL to make the GET request
     * @returns - The response data
     */
    public async get<T>(url: string): Promise<T> {
        return axios.get<T>(url).then((response) => response.data);
    }

    /**
     * the POST request method
     *
     * @param url - The URL to make the POST request
     * @param data - The data to send in the POST request
     * @returns - The response data
     */
    public async post<T>(url: string, data: unknown): Promise<T> {
        return axios.post<T>(url, data).then((response) => response.data);
    }

    /**
     * The PUT request method
     *
     * @param url - The URL to make the PUT request
     * @param data - The data to send in the PUT request
     * @returns - The response data
     */
    public async put<T>(url: string, data: unknown): Promise<T> {
        return axios.put<T>(url, data).then((response) => response.data);
    }

    /**
     * The DELETE request method
     *
     * @param url - The URL to make the DELETE request
     * @returns - The response data
     */
    public async delete<T>(url: string): Promise<T> {
        return axios.delete<T>(url).then((response) => response.data);
    }
}
