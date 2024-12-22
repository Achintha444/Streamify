import { useContext } from "react";
import InternalAuthDataContext, { InternalAuthDataContextProps } from "../contexts/internalAuthDataContext";

/**
 * Interface for the return type of the `useInternalAuthData` hook.
 */
export type UseInternalAuthDataInterface = InternalAuthDataContextProps;

/**
 * Hook that provides access to the information about the routes in the application.
 * @returns An object containing the route related information.
 */
const useInternalAuthData = (): UseInternalAuthDataInterface => {
    const context: InternalAuthDataContextProps | null = useContext(InternalAuthDataContext);

    if (!context) {
        throw new Error("UseInternalAuthData must be used within a InternalAuthDataProvider");
    }

    return context;
};

export default useInternalAuthData;
