import { Context, createContext } from "react";
import { UsersData } from "../models/UsersData";

/**
 * Props interface for UsersDataContext.
 */
export interface UsersDataContextProps {
    /**
     * Users data.
     */
    usersData: UsersData;
    /**
     * Flag indicating if an error occurred while loading the users data.
     */
    isUsersDataError: boolean;
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
