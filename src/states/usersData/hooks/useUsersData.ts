import { useContext } from "react";
import UsersDataContext, { UsersDataContextProps } from "../contexts/usersDataContext";

/**
 * Interface for the return type of the `useUsersData` hook.
 */
export type UseUsersDataInterface = UsersDataContextProps;

/**
 * Hook that provides access to the information about the users data.
 * @returns An object containing the Users related data.
 */
const useUsersData = (): UseUsersDataInterface => {
    const context: UsersDataContextProps | null = useContext(UsersDataContext);

    if (!context) {
        throw new Error("useUsersData must be used within a UsersDataProvider");
    }

    return context;
};

export default useUsersData;
