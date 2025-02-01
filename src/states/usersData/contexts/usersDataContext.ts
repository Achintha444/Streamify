import { Context, createContext } from "react";
import { UserAnalyticsData } from "../models/userAnalyticsData";
import { UsersData } from "../models/UsersData";

/**
 * Props interface for UsersDataContext.
 */
export interface UsersDataContextProps {
    /**
     * Users data.
     */
    usersData: UsersData | null;
    /**
     * Flag indicating if an error occurred while loading the users data.
     */
    isUsersDataError: boolean;
    /**
     * User analytics data.
     */
    userAnalyticsData: UserAnalyticsData | null;
    /**
     * Flag indicating if an error occurred while loading the user analytics data.
     */
    isUserAnalyticsDataError: boolean;
}

/**
 * Context object for managing the UsersDataContext.
 */
const UsersDataContext: Context<null | UsersDataContextProps> = createContext<
    null | UsersDataContextProps
>(
    null
);

/**
 * Display name for the UsersDataContext.
 */
UsersDataContext.displayName = "UsersDataContext";

export default UsersDataContext;
